import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./change-password.hbs";
import data from "./change-password-data";
import "./change-password.scss";
import layout from "../../layouts/base/base";
import controls from "../../components/controls/controls";
import profileContent from "../../components/profileContent/profileContent";

Handlebars.registerPartial({ layout, controls, profileContent });

const app = document.getElementById("app");
app.innerHTML = template(data);

const editInfoForm = document.getElementById("editInfoForm");
editInfoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  console.log({
    oldPassword: data.get("oldPassword"),
    password: data.get("password"),
    confirmPassword: data.get("confirmPassword"),
  });
  window.location = "/profile.html";
});
