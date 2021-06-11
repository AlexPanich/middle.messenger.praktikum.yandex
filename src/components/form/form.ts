import { Block } from "../../framework/block";
import compiledTemplate from "./form.hbs";
import "./form.scss";

document.addEventListener("DOMContentLoaded", () => {
  const forms = Array.from(
    document.querySelectorAll('[data-component-name="form"]')
  );
  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      // @ts-ignore
      const formData = new FormData(event.target);
      const data = Array.from(formData.entries()).reduce(
        (acc, [key, value]) => {
          // @ts-ignore
          acc[key] = value;
          return acc;
        },
        {}
      );
      console.log(data);
      // @ts-ignore
      window.location = form.dataset.redirectUrl;
    });
  });
});

type Props = {
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

export default class Form extends Block {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return compiledTemplate(this.props);
  }
}
