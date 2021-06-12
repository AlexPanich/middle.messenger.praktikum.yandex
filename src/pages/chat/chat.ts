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
      messager: {
        component: Messager,
        getProps: (props: Props) => ({ ...props.messager }),
      },
    });
  }

  render() {
    return compiledTemplate({
      components: {
        controls: this.getChildId("controls"),
        contacts: this.getChildId("contacts"),
        messager: this.getChildId("messager"),
      },
    });
  }
}

const chat = new Chat(data);

const app = document.getElementById("app") as HTMLElement;
app.append(chat.getOuterElement());
