import Handlebars from "handlebars/dist/handlebars.runtime";
import compiledTemplate from "./settings.hbs";
import "./settings.scss";

Handlebars.registerPartial({ settingsLayout: compiledTemplate });
