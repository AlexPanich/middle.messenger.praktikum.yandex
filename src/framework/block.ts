import { EventBus } from "./event-bus";
import { v4 as makeUUID } from "uuid";
import { htmlToDocumentFragment } from "./utils";

type CompileContext = {
  [key: string]: any;
};

type EventMeta = {
  eventName: string;
  listener: (event: Event) => void;
};

export type ConsturctEvents = ({ selector: string } & EventMeta)[];

type AddedEvents = ({ target: Element } & EventMeta)[];

type Props = {
  [prop: string]: any;
};

export type ConstructChild = {
  component: new (props: Props) => Block;
  getProps: (props: Props) => Props;
};

export type ChildrenProps = {
  [name: string]: ConstructChild | ConstructChild[];
};

type Children = {
  [name: string]: {
    component: Block;
    getProps: (props: Props) => Props;
    arrayName?: string;
    index?: number;
  };
};

interface PublicMethods {
  setProps: (nextProps: Props) => void;
  getInnerElement: () => HTMLElement;
  getOuterElement: () => HTMLElement;
  show: () => void;
  hide: () => void;
}

export abstract class Block implements PublicMethods {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  private _element: HTMLElement;
  private eventBus: EventBus;
  protected children: Children = {};
  private _id: string;
  private events: AddedEvents = [];
  protected _eventListeners: ConsturctEvents = [];

  constructor(protected props: Props = {}) {
    const eventBus = new EventBus();
    this.eventBus = eventBus;
    this._registerComponents(props);
    this._registerEventListeners(props);
    this.props = this._makePropsProxy(props);
    this._id = makeUUID();
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _initChildren(children: ChildrenProps, props: Props): void {
    Object.entries(children).forEach(([name, meta]) => {
      if (Array.isArray(meta)) {
        const example = meta[0];
        const array = example.getProps(props) as Props[];
        array.forEach((item, index: number) => {
          const getProps = (props: Props) => example.getProps(props)[index];
          this.children[name + index] = {
            component: new example.component(item),
            getProps,
            arrayName: name,
            index,
          };
        });
        return;
      }
      const { component, getProps } = meta;
      const childProps: Props = getProps(props);
      this.children[name] = {
        component: new component(childProps),
        getProps,
      };
    });
  }

  private _registerEvents(eventBus: EventBus): void {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  private init(): void {
    this._createResources();
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  private _createResources(): void {
    const tagName = "div";
    this._element = this._createDocumentElement(tagName);
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  private _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }

  private _componentDidMount(): void {
    this.componentDidMount();
  }

  protected componentDidMount(): void {}

  private _componentDidUpdate(oldProps: Props, newProps: Props): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    for (const { component, getProps } of Object.values(this.children)) {
      component.setProps(getProps(newProps));
    }
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  protected componentDidUpdate(_oldProps: Props, _newProps: Props): boolean {
    return true;
  }

  public setProps = (nextProps: Props): void => {
    if (!nextProps) {
      return;
    }
    Object.assign(this.props, nextProps);
  };

  protected get element(): HTMLElement {
    return this._element;
  }

  protected get id(): string {
    return this._id;
  }

  private _replaceChildrenBlocks(block: DocumentFragment): void {
    const replaceBlocks = block.querySelectorAll("[data-replace-id]");

    Array.from(replaceBlocks).forEach((replaceBlock: HTMLElement) => {
      const id = replaceBlock.dataset.replaceId as string;
      const parentBlock = replaceBlock.parentElement as HTMLElement;
      const child = this.getChildElementById(id) as Block;
      parentBlock.replaceChild(child.getInnerElement(), replaceBlock);
    });
  }

  private _render(): void {
    const block = htmlToDocumentFragment(this.render());
    this._replaceChildrenBlocks(block);

    this._removeEvent();

    this._element.firstElementChild
      ? this._element.replaceChild(block, this._element.firstElementChild)
      : this._element.append(block);

    this._addEvents();
  }

  private _addEvents(): void {
    this._eventListeners.forEach(({ selector, eventName, listener }) => {
      const targets = this._element.querySelectorAll(selector);
      Array.from(targets).forEach((target) => {
        target.addEventListener(eventName, listener);
        this.events.push({ target, eventName, listener });
      });
    });
  }

  private _removeEvent(): void {
    this.events.forEach(({ eventName, target, listener }) => {
      target.removeEventListener(eventName, listener);
    });
    this.events = [];
  }

  protected render(): string {
    return "";
  }

  public getInnerElement(): HTMLElement {
    return this.element.firstElementChild as HTMLElement;
  }

  public getOuterElement(): HTMLElement {
    return this.element;
  }

  protected getChildContent(name: string) {
    const child = this.children[name];
    if (!child) {
      return null;
    }
    return child.component.getInnerElement();
  }

  protected getChildId(name: string): string | null {
    const child = this.children[name];
    if (!child) {
      return null;
    }
    return child.component.id;
  }

  protected getChildElementById(id: string): Block | null {
    const child = Object.values(this.children).find(
      (child) => child.component.id === id
    );
    if (!child) {
      return null;
    }
    return child.component;
  }

  protected createCompileContext(
    customContext: CompileContext = {}
  ): CompileContext {
    const context = { ...this.props };
    if (context.events) {
      delete context.events;
    }

    context.components = Object.entries(this.children).reduce<{
      [name: string]: string | string[];
    }>((acc, [name, child]) => {
      if (
        typeof child.arrayName === "string" &&
        typeof child.index === "number"
      ) {
        const { arrayName, index } = child;
        if (!acc[arrayName]) {
          acc[arrayName] = [];
        }
        const arr = acc[arrayName] as string[];
        arr[index] = child.component.id;
      } else {
        acc[name] = child.component.id;
      }
      return acc;
    }, {});

    const { components: customComponents, ...restCustomContext } =
      customContext;
    if (customComponents) {
      context.components = { ...context.components, ...customComponents };
    }
    return { ...context, ...restCustomContext };
  }

  protected createComponentsList(
    list: any[],
    prefix: string
  ): { [name: string]: string } {
    return list.reduce((acc, _: any, index: number) => {
      const id = this.getChildId(`${prefix}${index}`);
      if (!id) {
        return acc;
      }
      acc[index] = id;
      return acc;
    }, {});
  }

  private _registerComponents(props: Props) {
    const components = this.registerComponents(props);
    this._initChildren(components, props);
  }

  protected registerComponents(_props: Props): ChildrenProps {
    const components: ChildrenProps = {};
    return components;
  }

  private _registerEventListeners(props: Props) {
    this._eventListeners = this.registerEventListeners(props);
  }

  protected registerEventListeners(_props: Props): ConsturctEvents {
    return [];
  }

  private _makePropsProxy(props: Props): Props {
    const self = this;

    const propsProxy = new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop: string, value) {
        if (target[prop] === value) {
          return true;
        }
        const oldProps = { ...target };
        target[prop] = value;
        self.eventBus.emit(Block.EVENTS.FLOW_CDU, oldProps, target);
        return true;
      },
      deleteProperty(_target, _prop) {
        throw new Error("Нет доступа");
      },
    });

    return propsProxy;
  }

  public show(): void {
    this.getInnerElement().style.display = "block";
  }

  public hide(): void {
    this.getInnerElement().style.display = "none";
  }
}
