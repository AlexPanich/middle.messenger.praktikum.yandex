import { Block } from "../../framework/block";
import compiledTemplate from "./change-password.hbs";
import data from "./change-password-data";
import "../../helpers/handlebarsHelpers";
import "../../layouts/settings/settings";
import Controls, {
  Props as ControlsProps,
} from "../../components/controls/controls";
import ProfileContent, {
  Props as ProfileContentProps,
} from "../../components/profileContent/profileContent";
import "./change-password.scss";

type Props = {
  controls: ControlsProps;
  profile: ProfileContentProps;
};

export default class ChangePassword extends Block {
  constructor(props: Props) {
    super(props, {
      controls: {
        component: Controls,
        getProps: (props: Props) => ({ ...props.controls }),
      },
      profileContent: {
        component: ProfileContent,
        getProps: (props: Props) => ({
          ...props.profile,
          edit: true,
        }),
      },
    });
  }

  render() {
    return compiledTemplate({
      components: {
        controls: this.getChildContent("controls"),
        profileContent: this.getChildContent("profileContent"),
      },
    });
  }
}

const changePassword = new ChangePassword(data);

const app = document.getElementById("app") as HTMLElement;
app.append(changePassword.getContent());
