import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./edit-profile.hbs";
import data from "./edit-profile-data";
import "./edit-profile.scss";
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
    email: data.get("email"),
    login: data.get("login"),
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    nickName: data.get("nickName"),
    phone: data.get("phone"),
  });
  window.location = "/profile.html";
});
