import template from "./messagerList.hbs";
import Handlebars from "handlebars/dist/handlebars.runtime";
import "./messagerList.scss";
import messageElem from "../message/messageElem";

Handlebars.registerPartial({ messageElem });

export default template;
