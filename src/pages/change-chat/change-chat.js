import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./change-chat.hbs";
import data from "./change-chat-data";
import "./change-chat.scss";
import layout from "../../layouts/base/base";
import controls from "../../components/controls/controls";
import contacts from "../../components/contacts/contacts";

Handlebars.registerPartial({ layout, controls, contacts });

const app = document.getElementById("app");
app.innerHTML = template(data);
