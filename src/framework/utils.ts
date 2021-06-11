export function htmlToElement(html: string): DocumentFragment {
  var template = document.createElement("template");
  html = html.trim();
  template.innerHTML = html;
  return template.content;
}
