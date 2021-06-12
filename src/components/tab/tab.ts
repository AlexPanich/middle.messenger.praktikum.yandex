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
