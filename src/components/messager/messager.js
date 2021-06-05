import template from "./messager.hbs";
import "./messager.scss";
import Handlebars from "handlebars/dist/handlebars.runtime";
import messagerContact from "../messagerContact/messagerContact";
import messagerList from "../messagerList/messagerList";
import messagerForm from "../messagerForm/messagerForm";

Handlebars.registerPartial({ messagerContact, messagerList, messagerForm });

export default template;
