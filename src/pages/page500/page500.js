import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./page500.hbs";
import data from "./page500-data";
import "./page500.scss";
import layout from "../../layouts/empty/empty";
import errorPageContent from "../../components/errorPageContent/errorPageContent";

Handlebars.registerPartial({ layout, errorPageContent });

const app = document.getElementById("app");
app.innerHTML = template(data);
