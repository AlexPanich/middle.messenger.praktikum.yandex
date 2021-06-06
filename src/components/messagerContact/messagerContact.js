import Handlebars from "handlebars/dist/handlebars.runtime";
import compiledTemplate from "./messagerContact.hbs";
import "../avatar/avatar";
import "./messagerContact.scss";

Handlebars.registerPartial({ messagerContact: compiledTemplate });
