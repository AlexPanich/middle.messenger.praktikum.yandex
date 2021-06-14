import { Block } from "../../framework/block";
import { createListChildrenProps } from "../../framework/utils";
import compiledTemplate from "./controls.hbs";
import Tab, { Props as TabProps } from "../tab/tab";
import "./controls.scss";

export type Props = {
  top: TabProps;
  center: TabProps[];
  bottom: TabProps;
};

export default class Controls extends Block {
  constructor(props: Props) {
    super(props, {
      top: {
        component: Tab,
        getProps: (props: Props) => ({ ...props.top }),
      },
      bottom: {
        component: Tab,
        getProps: (props: Props) => ({ ...props.bottom }),
      },
      ...createListChildrenProps<Props, new (props: TabProps) => Tab>(
        props,
        "center",
        Tab,
        "center"
      ),
    });
  }

  render() {
    const context = this.createCompileContext({
      components: {
        center: this.createComponentsList(this.props.center, "center"),
      },
    });

    return compiledTemplate(context);
  }
}
