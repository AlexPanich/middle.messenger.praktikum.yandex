import Handlebars from "handlebars/dist/handlebars.runtime";
import compiledTemplate from "./editInfo.hbs";
import "./editInfo.scss";

Handlebars.registerPartial({ editInfo: compiledTemplate });

document.addEventListener("DOMContentLoaded", () => {
  const forms = Array.from(
    document.querySelectorAll('[data-component-name="edit-info"]')
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
