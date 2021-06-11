import { Block } from "../../framework/block";
import compiledTemplate from "./contacts.hbs";
import Search from "../search/search";
import Contact, { Props as ContactProps } from "../contact/contact";
import "./contacts.scss";

export type Props = {
  type: string;
  list: ContactProps[];
};

export default class Contacts extends Block {
  constructor(props: Props) {
    super(props, {
      search: {
        component: Search,
        getProps: (_props: Props) => ({}),
      },
      ...props.list.reduce<any>((acc, _, index) => {
        acc[`contact${index}`] = {
          component: Contact,
          getProps: (props: Props) => ({ ...props.list[index] }),
        };
        return acc;
      }, {}),
    });
  }

  render() {
    return compiledTemplate({
      type: this.props.type,
      components: {
        search: this.getChildContent("search"),
        contacts: this.props.list.reduce((acc: any, _: any, index: number) => {
          acc[index] = this.getChildContent(`contact${index}`);
          return acc;
        }, {}),
      },
    });
  }
}
