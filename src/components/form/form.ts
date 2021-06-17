import { Block } from "../../framework/block";
import Validator, { ValidateRules } from "../../framework/validator";
import compiledTemplate from "./form.hbs";
import {
  getDefaultListenerForFormSubmit,
  getDefaultListenersForValidation,
} from "../../helpers/validateHelpers";
import "./form.scss";

export type Props = {
  title: string;
  redirectUrl: string;
  fields: {
    name: string;
    type: string;
    placeholder: string;
  }[];
  submitButton: {
    text: string;
  };
  altLink: {
    link: string;
    text: string;
  };
  validateRules: ValidateRules;
};

export default class Form extends Block {
  registerEventListeners(props: Props) {
    const validator = new Validator(props.validateRules);
    return [
      ...getDefaultListenersForValidation(
        validator,
        "input",
        "form__field-wrapper--error"
      ),
      getDefaultListenerForFormSubmit(
        validator,
        "form",
        "form__field-wrapper--error"
      ),
    ];
  }

  render() {
    const context = this.createCompileContext();
    return compiledTemplate(context);
  }
}
