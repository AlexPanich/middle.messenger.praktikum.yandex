import { Block } from "../../framework/block";
import compiledTemplate from "./messagerForm.hbs";
import "./messagerForm.scss";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('[data-component-name="message-form"]');
  const field = document.querySelector(
    'input[name="message"]'
  ) as HTMLInputElement;
  // @ts-ignore
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // @ts-ignore
    const formData = new FormData(event.target);
    const data = { message: formData.get("message") };
    console.log(data);
    field.value = "";
  });
});

type Props = {};

export default class MessagerForm extends Block {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return compiledTemplate({});
  }
}
