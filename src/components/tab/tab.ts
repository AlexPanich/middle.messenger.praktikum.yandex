import { Block } from "../../framework/block";
import compiledTemplate from "./tab.hbs";
import Avatar from "../avatar/avatar";
import "./tab.scss";

export type Props = {
  active?: boolean;
  avatar?: string;
  link?: string;
};

export default class Tab extends Block {
  registerComponents() {
    return {
      avatar: {
        component: Avatar,
        getProps: (props: Props) => ({ link: props.avatar, size: 64 }),
      },
    };
  }

  render() {
    const context = this.createCompileContext();
    return compiledTemplate(context);
  }
}
