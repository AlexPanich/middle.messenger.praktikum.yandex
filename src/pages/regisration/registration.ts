import { Block } from "../../framework/block";
import compiledTemplate from "./registration.hbs";
import data from "./registration-data";
import "../../helpers/handlebarsHelpers";
import "../../layouts/empty/empty";
import Form from "../../components/form/form";
import "./registration.scss";

type Props = {
  [key: string]: any;
};

export default class Registration extends Block {
  constructor(props: Props) {
    super(props, {
      form: {
        component: Form,
        getProps: (props: Props) => ({ ...props.form }),
      },
    });
  }

  render() {
    return compiledTemplate({
      components: {
        form: this.getChildContent("form"),
      },
    });
  }
}

const registration = new Registration(data);

const app = document.getElementById("app") as HTMLElement;
app.append(registration.getContent());
