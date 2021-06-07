import Handlebars from "handlebars/dist/handlebars.runtime";
import compiledTemplate from "./controls.hbs";
import "../tab/tab";
import "./controls.scss";

Handlebars.registerPartial({ controls: compiledTemplate });
