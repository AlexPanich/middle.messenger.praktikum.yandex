import { Block } from "../../framework/block";
import Validator, { ValidateRules } from "../../framework/validator";
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
  profile: Omit<ProfileContentProps, "validateRules">;
};

const validateRules: ValidateRules = {
  email: [
    { rule: Validator.defaultRegexp.email, errorMessage: "Некорректный email" },
  ],
  login: [
    { rule: Validator.defaultRegexp.name, errorMessage: "Некорректный логин" },
  ],
  firstName: [
    { rule: Validator.defaultRegexp.name, errorMessage: "Некорректное имя" },
  ],
  lastName: [
    { rule: Validator.defaultRegexp.name, errorMessage: "Некорректное имя" },
  ],
  nickName: [
    { rule: Validator.defaultRegexp.name, errorMessage: "Некорректное имя" },
  ],
  phone: [
    {
      rule: Validator.defaultRegexp.phone,
      errorMessage: "Некорректное телефон",
    },
  ],
};

export default class EditProfile extends Block {
  registerComponents() {
    return {
      controls: {
        component: Controls,
        getProps: (props: Props): ControlsProps => ({ ...props.controls }),
      },
      profileContent: {
        component: ProfileContent,
        getProps: (props: Props): ProfileContentProps => ({
          ...props.profile,
          edit: true,
          changeAvatar: true,
          validateRules,
        }),
      },
    };
  }

  render() {
    const context = this.createCompileContext();
    return compiledTemplate(context);
  }
}

const eidtProfile = new EditProfile(data);

const app = document.getElementById("app") as HTMLElement;
app.append(eidtProfile.getOuterElement());
