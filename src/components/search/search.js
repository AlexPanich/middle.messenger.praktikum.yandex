import Handlebars from "handlebars/dist/handlebars.runtime";
import compiledTemplate from "./search.hbs";
import "./search.scss";

Handlebars.registerPartial({ search: compiledTemplate });
