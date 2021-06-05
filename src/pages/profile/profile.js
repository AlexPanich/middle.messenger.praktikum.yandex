import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./profile.hbs";
import data from "./profile-data";
import "./profile.scss";
import layout from "../../layouts/base/base";
import controls from "../../components/controls/controls";
import profileContent from "../../components/profileContent/profileContent";

Handlebars.registerPartial({ layout, controls, profileContent });

const app = document.getElementById("app");
app.innerHTML = template(data);
