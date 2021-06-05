import template from "./controls.hbs";
import Handlebars from "handlebars/dist/handlebars.runtime";
import "./controls.scss";
import tab from "../tab/tab";

Handlebars.registerPartial({ tab });

export default template;
