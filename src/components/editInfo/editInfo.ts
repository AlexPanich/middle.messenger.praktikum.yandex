import { Block } from "../../framework/block";
import compiledTemplate from "./editInfo.hbs";
import "./editInfo.scss";

document.addEventListener("DOMContentLoaded", () => {
  const forms = Array.from(
    document.querySelectorAll('[data-component-name="edit-info"]')
  );
  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      // @ts-ignore
      const formData = new FormData(event.target);
      const data = Array.from(formData.entries()).reduce(
        (acc, [key, value]) => {
          // @ts-ignore
          acc[key] = value;
          return acc;
        },
        {}
      );
      console.log(data);
      // @ts-ignore
      window.location = form.dataset.redirectUrl;
    });
  });
});

export type EditInfoItem = {
  ruName: string;
  value: string;
  name: string;
  type: string;
};

type Props = {
  data: EditInfoItem[];
  redirectUrl: string;
};

export default class EditInfo extends Block {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return compiledTemplate({ ...this.props });
  }
}
