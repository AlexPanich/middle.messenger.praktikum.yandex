import Handlebars from "handlebars/dist/handlebars.runtime";
import compiledTemplate from "./messageElem.hbs";
import lineCompiledTemplate from "./line.hbs";
import messageCompiledTemplate from "./message.hbs";
import "./messageElem.scss";

Handlebars.registerPartial({
  line: lineCompiledTemplate,
  message: messageCompiledTemplate,
  messageElem: compiledTemplate,
});
