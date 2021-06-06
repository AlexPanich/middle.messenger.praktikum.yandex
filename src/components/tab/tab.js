import Handlebars from "handlebars/dist/handlebars.runtime";
import compiledTemplate from "./tab.hbs";
import "../avatar/avatar";
import "./tab.scss";

Handlebars.registerPartial({ tab: compiledTemplate });
