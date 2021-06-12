import { Block } from "../../framework/block";
import compiledTemplate from "./messager.hbs";
import MessagerContact, {
  Props as MessagerContactProps,
} from "../messagerContact/messagerContact";
import MessagerList, {
  Props as MessagerListProps,
} from "../messagerList/messagerList";
import MessagerForm from "../messagerForm/messagerForm";
import "./messager.scss";

export type Props = {
  contact: MessagerContactProps;
  content: MessagerListProps;
};

export default class Messager extends Block {
  constructor(props: Props) {
    super(props, {
      messagerContact: {
        component: MessagerContact,
        getProps: (props: Props) => ({ ...props.contact }),
      },
      messagerList: {
        component: MessagerList,
        getProps: (props: Props) => ({ ...props.content }),
      },
      messagerForm: {
        component: MessagerForm,
        getProps: (_props: Props) => ({}),
      },
    });
  }

  render() {
    const context = this.createCompileContext();
    return compiledTemplate(context);
  }
}
