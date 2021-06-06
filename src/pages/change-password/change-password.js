import compiledTemplate from "./change-password.hbs";
import data from "./change-password-data";
import "../../helpers/helpers";
import "../../layouts/settings/settings";
import "../../components/controls/controls";
import "../../components/profileContent/profileContent";
import "./change-password.scss";

const app = document.getElementById("app");
app.innerHTML = compiledTemplate(data);

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
