import { Block } from "../../framework/block";
import { Validate } from "../../framework/validator";
import compiledTemplate from "./form.hbs";
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
        {
          selector: "input",
          eventName: "blur",
          listener: (event: Event) => {
            const input = event.target as HTMLInputElement;
            const result = validator.test(input.name, input.value);
            if (result !== true) {
              const wrapper = input.parentElement as HTMLLIElement;
              wrapper.setAttribute("data-error-text", result.join(" ,"));
              wrapper.classList.add("form__field-wrapper--error");
            }
          },
        },
        {
          selector: "input",
          eventName: "focus",
          listener: (event: Event) => {
            const input = event.target as HTMLInputElement;
            const wrapper = input.parentElement as HTMLLIElement;
            wrapper.removeAttribute("data-error-text");
            wrapper.classList.add("form__field-wrapper--error");
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
    return compiledTemplate(this.props);
  }
}
