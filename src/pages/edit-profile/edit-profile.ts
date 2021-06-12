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
  profile: ProfileContentProps;
};

const validateRules: ValidateRules = {
  email: [
    { rule: Validator.defaultRegexp.email, errorMessage: "Некоректный email" },
  ],
  login: [
    { rule: Validator.defaultRegexp.name, errorMessage: "Некоректный логин" },
  ],
  firstName: [
    { rule: Validator.defaultRegexp.name, errorMessage: "Некоректное имя" },
  ],
  lastName: [
    { rule: Validator.defaultRegexp.name, errorMessage: "Некоректное имя" },
  ],
  nickName: [
    { rule: Validator.defaultRegexp.name, errorMessage: "Некоректное имя" },
  ],
  phone: [
    {
      rule: Validator.defaultRegexp.phone,
      errorMessage: "Некоректное телефон",
    },
  ],
};

const validator: Validator = new Validator(validateRules);

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

const eidtProfile = new EditProfile(data);

const app = document.getElementById("app") as HTMLElement;
app.append(eidtProfile.getOuterElement());
