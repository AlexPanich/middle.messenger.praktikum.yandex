import Handlebars from "handlebars/dist/handlebars.runtime";

Handlebars.registerHelper("and", function (...args): boolean {
  return args.every((arg) => !!arg);
});

Handlebars.registerHelper(
  "component",
  function (
    name: string,
    components: { [name: string]: string | null }
  ): Handlebars.SafeString | string {
    const id = components[name];
    if (!id) {
      return "";
    }
    return new Handlebars.SafeString(`<div data-replace-id=${id}></div>`);
  }
);
