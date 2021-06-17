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
          type: "users",
        }),
      },
      profileContent: {
        component: ProfileContent,
        getProps: (props: Props): ProfileContentProps => ({ ...props.profile }),
      },
    };
  }

  render() {
    const context = this.createCompileContext();
    return compiledTemplate(context);
  }
}

const users = new Users(data);

const app = document.getElementById("app") as HTMLElement;
app.append(users.getOuterElement());
