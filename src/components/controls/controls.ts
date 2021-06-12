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
      ...props.center.reduce<any>((acc, _, index) => {
        acc[`center${index}`] = {
          component: Tab,
          getProps: (props: Props) => ({ ...props.center[index] }),
        };
        return acc;
      }, {}),
    });
  }

  render() {
    return compiledTemplate({
      components: {
        top: this.getChildId("top"),
        bottom: this.getChildId("bottom"),
        center: this.props.center.reduce((acc: any, _: any, index: number) => {
          acc[index] = this.getChildId(`center${index}`);
          return acc;
        }, {}),
      },
    });
  }
}
