import { Block } from "../../framework/block";
import compiledTemplate from "./controls.hbs";
import Tab, { Props as TabProps } from "../tab/tab";
import "./controls.scss";

export type Props = {
  top: TabProps;
  center: TabProps[];
  bottom: TabProps;
};

export default class Controls extends Block {
  registerComponents() {
    return {
      top: {
        component: Tab,
        getProps: (props: Props): TabProps => props.top,
      },
      bottom: {
        component: Tab,
        getProps: (props: Props): TabProps => props.bottom,
      },
      center: [
        {
          component: Tab,
          getProps: (props: Props) => props.center,
        },
      ],
    };
  }

  render() {
    const context = this.createCompileContext();
    return compiledTemplate(context);
  }
}
