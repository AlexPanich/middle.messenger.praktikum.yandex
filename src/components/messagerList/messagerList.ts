import { Block } from "../../framework/block";
import compiledTemplate from "./messagerList.hbs";
import MessageElem, { Props as MessageElemProps } from "../message/messageElem";
import "./messagerList.scss";

export type Props = {
  list: MessageElemProps[];
};

export default class MessagerList extends Block {
  registerComponents() {
    return {
      list: [
        {
          component: MessageElem,
          getProps: (props: Props) => props.list,
        },
      ],
    };
  }

  render() {
    const context = this.createCompileContext();
    return compiledTemplate(context);
  }
}
