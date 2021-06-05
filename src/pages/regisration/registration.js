import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./registration.hbs";
import data from "./registration-data";
import "./registration.scss";
import layout from "../../layouts/empty/empty";
import form from "../../components/form/form";

Handlebars.registerPartial({ layout, form });

const app = document.getElementById("app");
app.innerHTML = template(data);

const registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  console.log({
    email: data.get("email"),
    login: data.get("login"),
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    phone: data.get("phone"),
    password: data.get("password"),
    confirmPassword: data.get("confirmPassword"),
  });
  window.location = "/change-chat.html";
});
