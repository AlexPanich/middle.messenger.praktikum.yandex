import { Block } from "../../framework/block";
import compiledTemplate from "./contact.hbs";
import Avatar from "../avatar/avatar";
import "./contact.scss";

export type Props = {
  avatar: string;
  nickName: string;
  message?: string;
  time?: string;
  newMessages?: number;
};

export default class Tab extends Block {
  constructor(props: Props) {
    super(props, {
      avatar: {
        component: Avatar,
        getProps: (props: Props) => ({ link: props.avatar, size: 64 }),
      },
    });
  }

  render() {
    return compiledTemplate({
      ...this.props,
      components: {
        avatar: this.getChildId("avatar"),
      },
    });
  }
}
