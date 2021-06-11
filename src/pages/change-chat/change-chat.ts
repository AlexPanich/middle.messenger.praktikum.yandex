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
  constructor(props: Props) {
    super(props, {
      controls: {
        component: Controls,
        getProps: (props: Props) => ({ ...props.controls }),
      },
      contacts: {
        component: Contacts,
        getProps: (props: Props) => ({ ...props.contacts, type: "chat" }),
      },
    });
  }

  render() {
    return compiledTemplate({
      message: this.props.content.message,
      components: {
        controls: this.getChildContent("controls"),
        contacts: this.getChildContent("contacts"),
      },
    });
  }
}

const changeChat = new ChangeChat(data);

const app = document.getElementById("app") as HTMLElement;
app.append(changeChat.getContent());
