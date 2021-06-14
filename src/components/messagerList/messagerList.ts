import { Block } from "../../framework/block";
import { createListChildrenProps } from "../../framework/utils";
import compiledTemplate from "./messagerList.hbs";
import MessageElem, { Props as MessageElemProps } from "../message/messageElem";
import "./messagerList.scss";

export type Props = {
  list: MessageElemProps[];
};

export default class MessagerList extends Block {
  constructor(props: Props) {
    super(
      props,
      createListChildrenProps<
        Props,
        new (props: MessageElemProps) => MessageElem
      >(props, "list", MessageElem, "message")
    );
  }

  render() {
    const context = this.createCompileContext({
      components: {
        list: this.createComponentsList(this.props.list, "message"),
      },
    });
    return compiledTemplate(context);
  }
}
