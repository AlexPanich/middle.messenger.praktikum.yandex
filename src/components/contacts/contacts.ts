import { Block } from "../../framework/block";
import { createListChildrenProps } from "../../framework/utils";
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
      ...createListChildrenProps<Props, new (props: ContactProps) => Contact>(
        props,
        "list",
        Contact,
        "contact"
      ),
    });
  }

  render() {
    const context = this.createCompileContext({
      components: {
        contacts: this.createComponentsList(this.props.list, "contact"),
      },
    });

    return compiledTemplate(context);
  }
}
