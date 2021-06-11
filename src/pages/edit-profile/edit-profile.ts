import { Block } from "../../framework/block";
import compiledTemplate from "./edit-profile.hbs";
import data from "./edit-profile-data";
import "../../helpers/handlebarsHelpers";
import "../../layouts/settings/settings";
import Controls, {
  Props as ControlsProps,
} from "../../components/controls/controls";
import ProfileContent, {
  Props as ProfileContentProps,
} from "../../components/profileContent/profileContent";
import "./edit-profile.scss";

type Props = {
  controls: ControlsProps;
  profile: ProfileContentProps;
};

export default class EditProfile extends Block {
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
          changeAvatar: true,
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

const eidtProfile = new EditProfile(data);

const app = document.getElementById("app") as HTMLElement;
app.append(eidtProfile.getContent());
