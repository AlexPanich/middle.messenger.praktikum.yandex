import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./login.hbs";
import data from "./login-data";
import "./login.scss";
import layout from "../../layouts/empty/empty";
import form from "../../components/form/form";

Handlebars.registerPartial({ layout, form });

const app = document.getElementById("app");
app.innerHTML = template(data);

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  console.log({
    login: data.get("login"),
    password: data.get("password"),
  });
  window.location = "/change-chat.html";
});
