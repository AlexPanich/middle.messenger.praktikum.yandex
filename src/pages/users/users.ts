import { Block } from "../../framework/block";
import compiledTemplate from "./users.hbs";
import data from "./users-data";
import "../../helpers/handlebarsHelpers";
import "../../layouts/base/base";
import Controls, {
  Props as ControlsProps,
} from "../../components/controls/controls";
import Contacts, {
  Props as ContactsProps,
} from "../../components/contacts/contacts";
import ProfileContent, {
  Props as ProfileContentProps,
} from "../../components/profileContent/profileContent";
import "./users.scss";

type Props = {
  controls: ControlsProps;
  contacts: Omit<ContactsProps, "type">;
  profile: ProfileContentProps;
};

export default class Users extends Block {
  constructor(props: Props) {
    super(props, {
      controls: {
        component: Controls,
        getProps: (props: Props) => ({ ...props.controls }),
      },
      contacts: {
        component: Contacts,
        getProps: (props: Props) => ({ ...props.contacts, type: "users" }),
      },
      profileContent: {
        component: ProfileContent,
        getProps: (props: Props) => ({ ...props.profile }),
      },
    });
  }

  render() {
    return compiledTemplate({
      components: {
        controls: this.getChildContent("controls"),
        contacts: this.getChildContent("contacts"),
        profileContent: this.getChildContent("profileContent"),
      },
    });
  }
}

const users = new Users(data);

const app = document.getElementById("app") as HTMLElement;
app.append(users.getContent());
