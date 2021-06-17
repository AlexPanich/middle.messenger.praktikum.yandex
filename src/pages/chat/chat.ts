import { Block } from "../../framework/block";
import compiledTemplate from "./chat.hbs";
import data from "./chat-data";
import "../../helpers/handlebarsHelpers";
import "../../layouts/base/base";
import Controls, {
  Props as ControlsProps,
} from "../../components/controls/controls";
import Contacts, {
  Props as ContactsProps,
} from "../../components/contacts/contacts";
import Messager, {
  Props as MessagerProps,
} from "../../components/messager/messager";
import "./chat.scss";

type Props = {
  controls: ControlsProps;
  contacts: Omit<ContactsProps, "type">;
  messager: MessagerProps;
};

export default class Chat extends Block {
  registerComponents() {
    return {
      controls: {
        component: Controls,
        getProps: (props: Props): ControlsProps => ({ ...props.controls }),
      },
      contacts: {
        component: Contacts,
        getProps: (props: Props): ContactsProps => ({
          ...props.contacts,
          type: "chat",
        }),
      },
      messager: {
        component: Messager,
        getProps: (props: Props): MessagerProps => ({ ...props.messager }),
      },
    };
  }

  render() {
    const context = this.createCompileContext();
    return compiledTemplate(context);
  }
}

const chat = new Chat(data);

const app = document.getElementById("app") as HTMLElement;
app.append(chat.getOuterElement());
