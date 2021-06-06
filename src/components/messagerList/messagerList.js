import Handlebars from "handlebars/dist/handlebars.runtime";
import compiledTemplate from "./messagerList.hbs";
import "../message/messageElem";
import "./messagerList.scss";

Handlebars.registerPartial({ messagerList: compiledTemplate });
