import template from "./messageElem.hbs";
import line from "./line.hbs";
import message from "./message.hbs";
import "./messageElem.scss";
import Handlebars from "handlebars/dist/handlebars.runtime";

Handlebars.registerPartial({ line, message });

export default template;
