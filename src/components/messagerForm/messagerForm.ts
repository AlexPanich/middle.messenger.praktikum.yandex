import { Block } from "../../framework/block";
import compiledTemplate from "./messagerForm.hbs";
import Validator, { ValidateRules } from "../../framework/validator";
export {
  setErrorAttributes,
  removeErrorAttributes,
} from "../../helpers/validateHelpers";
import "./messagerForm.scss";
import {
  removeErrorAttributes,
  setErrorAttributes,
} from "../../helpers/validateHelpers";

type Props = {};

const validateRules: ValidateRules = {
  message: [
    {
      rule: (value: string) => {
        return !value.includes("редиска");
      },
      errorMessage: "Недопустимое слово",
    },
  ],
};

const validator: Validator = new Validator(validateRules);

function handleSubmit(event: Event): void {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const field = form.querySelector('input[name="message"]') as HTMLInputElement;
  const result = validator.test(field.name, field.value);
  if (result !== true) {
    setErrorAttributes(
      field,
      result.join(" ,"),
      "messager-form__field-wrapper--error"
    );
    field.blur();
    return;
  }
  const formData = new FormData(form);
  const data = Array.from(formData.entries()).reduce<{
    [key: string]: string;
  }>((acc, [key, value]) => {
    acc[key] = value.toString();
    return acc;
  }, {});
  console.log(data);
  field.value = "";
}

function handleFocus(event: Event): void {
  const field = event.target as HTMLFormElement;
  if (
    field.parentElement?.classList.contains(
      "messager-form__field-wrapper--error"
    )
  ) {
    removeErrorAttributes(field, "messager-form__field-wrapper--error");
  }
}

export default class MessagerForm extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: [
        {
          selector: "form",
          eventName: "submit",
          listener: handleSubmit,
        },
        {
          selector: 'input[name="message"]',
          eventName: "focus",
          listener: handleFocus,
        },
      ],
    });
  }

  render() {
    const context = this.createCompileContext();
    return compiledTemplate(context);
  }
}
