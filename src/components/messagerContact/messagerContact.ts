import { Block } from "../../framework/block";
import compiledTemplate from "./messagerContact.hbs";
import Avatar from "../avatar/avatar";
import "./messagerContact.scss";

export type Props = {
  avatar: string;
  nickName: string;
};

export default class MessagerContact extends Block {
  constructor(props: Props) {
    super(props, {
      avatar: {
        component: Avatar,
        getProps: (props: Props) => ({ link: props.avatar, size: 64 }),
      },
    });
  }

  render() {
    const context = this.createCompileContext();
    return compiledTemplate(context);
  }
}
