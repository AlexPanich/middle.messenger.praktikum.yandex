import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./contacts.hbs";
import "./contacts.scss";
import search from "../search/search";
import contact from "../contact/contact";

Handlebars.registerPartial({ search, contact });

export default template;
