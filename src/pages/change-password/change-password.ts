import { Block } from "../../framework/block";
import Validator, { ValidateRules } from "../../framework/validator";
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
  profile: Omit<ProfileContentProps, "validateRules">;
};

const validateRules: ValidateRules = {
  oldPassword: [
    { rule: Validator.defaultRegexp.password, errorMessage: "Слишком простой" },
  ],
  password: [
    { rule: Validator.defaultRegexp.password, errorMessage: "Слишком простой" },
  ],
  confirmPassword: [
    { rule: Validator.defaultRegexp.password, errorMessage: "Слишком простой" },
  ],
};

export default class ChangePassword extends Block {
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

const changePassword = new ChangePassword(data);

const app = document.getElementById("app") as HTMLElement;
app.append(changePassword.getOuterElement());
