import { Block } from "../../framework/block";
import { Validate } from "../../framework/Validator";
import compiledTemplate from "./editInfo.hbs";
import "./editInfo.scss";

export type EditInfoItem = {
  ruName: string;
  value: string;
  name: string;
  type: string;
};

type Props = {
  data: EditInfoItem[];
  redirectUrl: string;
};

type ValidatorProps = {
  validator: Validate;
};

export default class EditInfo extends Block {
  constructor(props: Props & ValidatorProps) {
    const { validator, ...restProps } = props;
    super({
      ...restProps,
      events: [
        {
          selector: "input",
          eventName: "blur",
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
            const fields = form.querySelectorAll("[data-field]");
            const isValid = Array.from(fields).every(
              (field: HTMLInputElement) => {
                const result = validator.test(field.name, field.value);
                if (result === true) {
                  return true;
                }
                return false;
              }
            );
            console.log(isValid);
            const formData = new FormData(form);
            const data = Array.from(formData.entries()).reduce<{
              [key: string]: string;
            }>((acc, [key, value]) => {
              acc[key] = value.toString();
              return acc;
            }, {});
            console.log(data, "1");
            if (form.dataset.redirectUrl) {
              window.location.pathname = form.dataset.redirectUrl;
            }
          },
        },
      ],
    });
  }

  render() {
    return compiledTemplate({ ...this.props });
  }
}
