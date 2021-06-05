import template from "./tab.hbs";
import "./tab.scss";
import Handlebars from "handlebars/dist/handlebars.runtime";
import avatar from "../avatar/avatar";

Handlebars.registerPartial({ avatar });

export default template;
