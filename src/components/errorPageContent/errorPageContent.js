import Handlebars from "handlebars/dist/handlebars.runtime";
import compiledTemplate from "./errorPageContent.hbs";
import "./errorPageContent.scss";

Handlebars.registerPartial({ errorPageContent: compiledTemplate });
