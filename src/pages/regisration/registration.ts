import { Block } from "../../framework/block";
import Validator, { ValidateRules } from "../../framework/validator";
import compiledTemplate from "./registration.hbs";
import data from "./registration-data";
import "../../helpers/handlebarsHelpers";
import "../../layouts/empty/empty";
import Form, { Props as FormProps } from "../../components/form/form";
import "./registration.scss";

type Props = {
  form: FormProps;
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
  phone: [
    {
      rule: Validator.defaultRegexp.phone,
      errorMessage: "Некорректное телефон",
    },
  ],
  password: [
    { rule: Validator.defaultRegexp.password, errorMessage: "Слишком простой" },
  ],
  confirmPassword: [
    { rule: Validator.defaultRegexp.password, errorMessage: "Слишком простой" },
  ],
};

const validator: Validator = new Validator(validateRules);

export default class Registration extends Block {
  constructor(props: Props) {
    super(props, {
      form: {
        component: Form,
        getProps: (props: Props) => ({ ...props.form, validator }),
      },
    });
  }

  render() {
    const context = this.createCompileContext();
    return compiledTemplate(context);
  }
}

const registration = new Registration(data);

const app = document.getElementById("app") as HTMLElement;
app.append(registration.getOuterElement());
