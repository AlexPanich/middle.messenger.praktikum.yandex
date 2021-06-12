import { Block } from "../../framework/block";
import compiledTemplate from "./messagerList.hbs";
import MessageElem, { Props as MessageElemProps } from "../message/messageElem";
import "./messagerList.scss";

export type Props = {
  list: MessageElemProps[];
};

export default class MessagerList extends Block {
  constructor(props: Props) {
    super(props, {
      ...props.list.reduce<any>((acc, _, index) => {
        acc[`message${index}`] = {
          component: MessageElem,
          getProps: (props: Props) => ({ ...props.list[index] }),
        };
        return acc;
      }, {}),
    });
  }

  render() {
    return compiledTemplate({
      components: {
        list: this.props.list.reduce((acc: any, _: any, index: number) => {
          acc[index] = this.getChildId(`message${index}`);
          return acc;
        }, {}),
      },
    });
  }
}
