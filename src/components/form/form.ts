import { Block } from "../../framework/block";
import { Validate } from "../../framework/validator";
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
};

type ValidatorProps = {
  validator: Validate;
};

export default class Form extends Block {
  constructor(props: Props & ValidatorProps) {
    const { validator, ...restProps } = props;
    super({
      ...restProps,
      events: [
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
      ],
    });
  }

  render() {
    const context = this.createCompileContext();
    return compiledTemplate(context);
  }
}
