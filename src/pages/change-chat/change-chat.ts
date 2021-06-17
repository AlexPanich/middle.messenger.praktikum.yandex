import { Block } from "../../framework/block";
import compiledTemplate from "./change-chat.hbs";
import data from "./change-chat-data";
import "../../helpers/handlebarsHelpers";
import "../../layouts/base/base";
import Controls, {
  Props as ControlsProps,
} from "../../components/controls/controls";
import Contacts, {
  Props as ContactsProps,
} from "../../components/contacts/contacts";
import "./change-chat.scss";

type Props = {
  controls: ControlsProps;
  contacts: Omit<ContactsProps, "type">;
  content: {
    message: string;
  };
};

export default class ChangeChat extends Block {
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
    };
  }

  render() {
    const context = this.createCompileContext({
      message: this.props.content.message,
    });
    return compiledTemplate(context);
  }
}

const changeChat = new ChangeChat(data);

const app = document.getElementById("app") as HTMLElement;
app.append(changeChat.getOuterElement());
