import Handlebars from "handlebars/dist/handlebars.runtime";
import compiledTemplate from "./userlist.hbs";
import "./userlist.scss";

Handlebars.registerPartial({ userlist: compiledTemplate });
