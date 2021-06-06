import Handlebars from "handlebars/dist/handlebars.runtime";
import compiledTemplate from "./messager.hbs";
import "../messagerContact/messagerContact";
import "../messagerList/messagerList";
import "../messagerForm/messagerForm";
import "./messager.scss";

Handlebars.registerPartial({ messager: compiledTemplate });
