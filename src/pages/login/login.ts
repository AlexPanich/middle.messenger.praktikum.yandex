import { Block } from "../../framework/block";
import Validator, { ValidateRules } from "../../framework/Validator";
import compiledTemplate from "./login.hbs";
import "../../layouts/empty/empty";
import "../../helpers/handlebarsHelpers";
import Form, { Props as FormProps } from "../../components/form/form";
import data from "./login-data";
import "./login.scss";

type Props = {
  form: FormProps;
};

const validateRules: ValidateRules = {
  login: [
    {
      rule: Validator.defaultRegexp.text,
      errorMessage: "Недопустимые символы",
    },
  ],
  password: [
    { rule: Validator.defaultRegexp.password, errorMessage: "Слишком простой" },
  ],
};

const validator: Validator = new Validator(validateRules);

export default class Login extends Block {
  constructor(props: Props) {
    super(props, {
      form: {
        component: Form,
        getProps: (props: Props) => ({ ...props.form, validator }),
      },
    });
  }

  render() {
    return compiledTemplate({
      components: {
        form: this.getChildId("form"),
      },
    });
  }
}

const login = new Login(data);

const app = document.getElementById("app") as HTMLElement;
app.append(login.getOuterElement());
