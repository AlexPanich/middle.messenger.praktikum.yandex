import template from "./profileContent.hbs";
import "./profileContent.scss";
import Handlebars from "handlebars/dist/handlebars.runtime";
import info from "../info/info";
import avatar from "../avatar/avatar";

Handlebars.registerPartial({ info, avatar });

export default template;
