import { Block } from "../../framework/block";
import compiledTemplate from "./contact.hbs";
import Avatar, { Props as AvatarProps } from "../avatar/avatar";
import "./contact.scss";

export type Props = {
  avatar: string;
  nickName: string;
  message?: string;
  time?: string;
  newMessages?: number;
};

export default class Contact extends Block {
  constructor(props: Props) {
    super(props);
  }

  registerComponents() {
    return {
      avatar: {
        component: Avatar,
        getProps: (props: Props): AvatarProps => ({
          link: props.avatar,
          size: 64,
        }),
      },
    };
  }

  render() {
    const context = this.createCompileContext();
    return compiledTemplate(context);
  }
}
