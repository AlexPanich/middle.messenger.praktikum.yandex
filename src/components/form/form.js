import Handlebars from "handlebars/dist/handlebars.runtime";
import compiledTemplate from "./form.hbs";
import "./form.scss";

Handlebars.registerPartial({ form: compiledTemplate });

document.addEventListener("DOMContentLoaded", () => {
  const forms = Array.from(
    document.querySelectorAll('[data-component-name="form"')
  );
  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Array.from(formData.entries()).reduce(
        (acc, [key, value]) => {
          acc[key] = value;
          return acc;
        },
        {}
      );
      console.log(data);
      window.location = form.dataset.redirectUrl;
    });
  });
});
