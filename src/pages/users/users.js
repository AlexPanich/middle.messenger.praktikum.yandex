import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./users.hbs";
import data from "./users-data";
import "./users.scss";
import layout from "../../layouts/base/base";
import controls from "../../components/controls/controls";
import contacts from "../../components/contacts/contacts";
import profileContent from "../../components/profileContent/profileContent";

Handlebars.registerPartial({ layout, controls, contacts, profileContent });

const app = document.getElementById("app");
app.innerHTML = template(data);