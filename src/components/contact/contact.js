import Handlebars from "handlebars/dist/handlebars.runtime";
import compiledTemplate from "./contact.hbs";
import "../avatar/avatar";
import "./contact.scss";

Handlebars.registerPartial({ contact: compiledTemplate });
