import Handlebars from "handlebars/dist/handlebars.runtime";
import compiledTemplate from "./info.hbs";
import "./info.scss";

Handlebars.registerPartial({ info: compiledTemplate });
