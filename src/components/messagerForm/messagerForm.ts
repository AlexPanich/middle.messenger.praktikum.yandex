import { Block } from "../../framework/block";
import compiledTemplate from "./messagerForm.hbs";
import Validator, { ValidateRules } from "../../framework/Validator";
import "./messagerForm.scss";

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

export default class MessagerForm extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: [
        {
          selector: "input",
          eventName: "input",
          listener: (event: Event) => {
            const input = event.target as HTMLInputElement;
            const result = validator.test(input.name, input.value);
            console.log(result);
          },
        },
        {
          selector: "input",
          eventName: "focus",
          listener: (event: Event) => {
            const input = event.target as HTMLInputElement;
            console.log(input.name, input.value);
          },
        },
        {
          selector: "form",
          eventName: "submit",
          listener: (event: Event) => {
            event.preventDefault();
            const form = event.target as HTMLFormElement;
            const field = form.querySelector(
              'input[name="message"]'
            ) as HTMLInputElement;
            const result = validator.test(field.name, field.value);
            console.log(result);
            const formData = new FormData(form);
            const data = Array.from(formData.entries()).reduce<{
              [key: string]: string;
            }>((acc, [key, value]) => {
              acc[key] = value.toString();
              return acc;
            }, {});
            console.log(data);
            field.value = "";
          },
        },
      ],
    });
  }

  render() {
    return compiledTemplate({});
  }
}
