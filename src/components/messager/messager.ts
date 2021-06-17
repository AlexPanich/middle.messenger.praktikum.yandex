import { Block } from "../../framework/block";
import compiledTemplate from "./messager.hbs";
import MessagerContact, {
  Props as MessagerContactProps,
} from "../messagerContact/messagerContact";
import MessagerList, {
  Props as MessagerListProps,
} from "../messagerList/messagerList";
import MessagerForm, {
  Props as MessagerFormProps,
} from "../messagerForm/messagerForm";
import "./messager.scss";

export type Props = {
  contact: MessagerContactProps;
  content: MessagerListProps;
};

export default class Messager extends Block {
  registerComponents() {
    return {
      messagerContact: {
        component: MessagerContact,
        getProps: (props: Props): MessagerContactProps => ({
          ...props.contact,
        }),
      },
      messagerList: {
        component: MessagerList,
        getProps: (props: Props): MessagerListProps => ({ ...props.content }),
      },
      messagerForm: {
        component: MessagerForm,
        getProps: (_props: Props): MessagerFormProps => ({}),
      },
    };
  }

  render() {
    const context = this.createCompileContext();
    return compiledTemplate(context);
  }
}
