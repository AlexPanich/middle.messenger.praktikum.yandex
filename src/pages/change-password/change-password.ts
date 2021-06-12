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
  profile: ProfileContentProps;
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

const validator: Validator = new Validator(validateRules);

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
          validator,
        }),
      },
    });
  }

  render() {
    const context = this.createCompileContext();
    return compiledTemplate(context);
  }
}

const changePassword = new ChangePassword(data);

const app = document.getElementById("app") as HTMLElement;
app.append(changePassword.getOuterElement());
