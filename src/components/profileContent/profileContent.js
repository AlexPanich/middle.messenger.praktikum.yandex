import template from "./profileContent.hbs";
import "./profileContent.scss";
import Handlebars from "handlebars/dist/handlebars.runtime";
import info from "../info/info";
import editInfo from "../editInfo/editInfo";
import avatar from "../avatar/avatar";

Handlebars.registerPartial({ info, editInfo, avatar });

export default template;
