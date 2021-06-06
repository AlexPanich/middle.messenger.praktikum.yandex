import Handlebars from "handlebars/dist/handlebars.runtime";
import compiledTemplate from "./contacts.hbs";
import "../search/search";
import "../contact/contact";
import "./contacts.scss";

Handlebars.registerPartial({ contacts: compiledTemplate });
