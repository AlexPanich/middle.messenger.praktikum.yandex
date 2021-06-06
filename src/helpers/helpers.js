import Handlebars from "handlebars/dist/handlebars.runtime";

Handlebars.registerHelper("and", function (...args) {
  return args.every((arg) => !!arg);
});
