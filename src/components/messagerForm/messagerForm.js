import Handlebars from "handlebars/dist/handlebars.runtime";
import compiledTemplate from "./messagerForm.hbs";
import "./messagerForm.scss";

Handlebars.registerPartial({ messagerForm: compiledTemplate });

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('[data-component-name="message-form"');
  const field = document.querySelector('input[name="message"]');
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = { message: formData.get("message") };
    console.log(data);
    field.value = "";
  });
});
