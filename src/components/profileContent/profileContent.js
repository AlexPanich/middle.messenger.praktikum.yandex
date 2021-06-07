import Handlebars from "handlebars/dist/handlebars.runtime";
import compiledTemplate from "./profileContent.hbs";
import "./profileContent.scss";
import "../info/info";
import "../editInfo/editInfo";
import "../avatar/avatar";

Handlebars.registerPartial({ profileContent: compiledTemplate });
