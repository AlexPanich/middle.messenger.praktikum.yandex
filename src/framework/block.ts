import { EventBus } from "./event-bus";
import { htmlToElement } from "./utils";

type Props = { [prop: string]: any };
type ChildrenProps = {
  [name: string]: {
    component: new (props: Props) => Block;
    getProps: (props: Props) => Props;
  };
};
type Children = {
  [name: string]: {
    component: Block;
    getProps: (props: Props) => Props;
  };
};

export abstract class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  private _element: HTMLElement;
  private eventBus: EventBus;
  protected children: Children = {};

  constructor(protected props: Props = {}, children: ChildrenProps = {}) {
    const eventBus = new EventBus();

    this._initChildren(children, props);
    this.props = this._makePropsProxy(props);

    this.eventBus = eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _initChildren(children: ChildrenProps, props: Props) {
    Object.entries(children).forEach(([name, meta]) => {
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

  protected _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }

  private _componentDidMount() {
    this.componentDidMount();
  }

  protected componentDidMount(): void {}

  private _componentDidUpdate(oldProps: Props, newProps: Props) {
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

  public setProps = (nextProps: Props) => {
    console.log("setProps", nextProps);
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  private _render(): void {
    const block = htmlToElement(this.render());

    this._element.firstElementChild
      ? this._element.replaceChild(block, this._element.firstElementChild)
      : this._element.append(block);
  }

  protected render(): string {
    return "";
  }

  public getContent() {
    return this.element;
  }

  public getChildContent(name: string) {
    const child = this.children[name];
    if (!child) {
      return null;
    }
    return child.component.getContent();
  }

  protected _makePropsProxy(props: Props): Props {
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
        const oldProps = { ...this.props };
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
    this.getContent().style.display = "block";
  }

  public hide() {
    this.getContent().style.display = "none";
  }
}
