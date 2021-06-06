import Handlebars from "handlebars/dist/handlebars.runtime";
import compiledTemplate from "./avatar.hbs";
import "./avatar.scss";

Handlebars.registerPartial({ avatar: compiledTemplate });
