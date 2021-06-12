import { ChildrenProps } from "./block";

export function htmlToDocumentFragment(html: string): DocumentFragment {
  var template = document.createElement("template");
  html = html.trim();
  template.innerHTML = html;
  return template.content;
}

export function createListChildrenProps<P, C>(
  props: P,
  propName: keyof P,
  Component: C,
  prefix: string
): ChildrenProps {
  // @ts-ignore
  return props[propName].reduce<ChildrenProps>(
    (acc: ChildrenProps, _, index: number) => {
      acc[`${prefix}${index}`] = {
        // @ts-ignore
        component: Component,
        // @ts-ignore
        getProps: (props: P) => ({ ...props[propName][index] }),
      };
      return acc;
    },
    {}
  );
}
