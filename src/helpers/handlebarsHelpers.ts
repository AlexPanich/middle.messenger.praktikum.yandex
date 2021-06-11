import Handlebars from "handlebars/dist/handlebars.runtime";

Handlebars.registerHelper("and", function (...args) {
  return args.every((arg) => !!arg);
});

Handlebars.registerHelper("component", function (name, components) {
  const wrapper = components[name];
  if (!wrapper) {
    return "";
  }
  const elem = components[name].firstElementChild;
  return new Handlebars.SafeString(elem.outerHTML);
});

Handlebars.registerHelper("componentList", function (name, components) {
  const list = [];
  for (const item of components[name]) {
    list.push(item.innerHTML);
  }
  return new Handlebars.SafeString(`${list.join("")}`);
});
