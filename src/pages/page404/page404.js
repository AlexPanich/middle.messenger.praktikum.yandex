import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./page404.hbs";
import data from "./page404-data";
import "./page404.scss";
import layout from "../../layouts/empty/empty";
import errorPageContent from "../../components/errorPageContent/errorPageContent";

Handlebars.registerPartial({ layout, errorPageContent });

const app = document.getElementById("app");
app.innerHTML = template(data);
