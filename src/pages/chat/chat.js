import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./chat.hbs";
import data from "./chat-data";
import "./chat.scss";
import layout from "../../layouts/base/base";
import controls from "../../components/controls/controls";
import contacts from "../../components/contacts/contacts";
import messager from "../../components/messager/messager";

Handlebars.registerPartial({ layout, controls, contacts, messager });

const app = document.getElementById("app");
app.innerHTML = template(data);

const messagerForm = document.getElementById("messagerForm");
messagerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  console.log(data.getAll("message"));
});
