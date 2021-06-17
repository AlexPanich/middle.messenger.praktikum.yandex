import { Block } from "../../framework/block";
import compiledTemplate from "./profile.hbs";
import data from "./profile-data";
import "../../helpers/handlebarsHelpers";
import "../../layouts/settings/settings";
import Controls, {
  Props as ControlsProps,
} from "../../components/controls/controls";
import ProfileContent, {
  Props as ProfileContentProps,
} from "../../components/profileContent/profileContent";
import "./profile.scss";

type Props = {
  controls: ControlsProps;
  profile: ProfileContentProps;
};

export default class Profile extends Block {
  registerComponents() {
    return {
      controls: {
        component: Controls,
        getProps: (props: Props): ControlsProps => ({ ...props.controls }),
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

const profile = new Profile(data);

const app = document.getElementById("app") as HTMLElement;
app.append(profile.getOuterElement());
