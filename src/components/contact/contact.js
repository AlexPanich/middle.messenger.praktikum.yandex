import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./contact.hbs";
import "./contact.scss";
import avatar from "../avatar/avatar";

Handlebars.registerPartial({ avatar });

export default template;
