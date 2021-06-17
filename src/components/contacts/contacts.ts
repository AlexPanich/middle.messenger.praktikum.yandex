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
  registerComponents() {
    return {
      search: {
        component: Search,
        getProps: (_props: Props) => ({}),
      },
      contacts: [
        {
          component: Contact,
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
