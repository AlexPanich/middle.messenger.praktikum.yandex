import { Block } from "../../framework/block";
import compiledTemplate from "./login.hbs";
import "../../layouts/empty/empty";
import "../../helpers/handlebarsHelpers";
import Form from "../../components/form/form";
import data from "./login-data";
import "./login.scss";

type Props = {
  [key: string]: any;
};

export default class Login extends Block {
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

const login = new Login(data);

const app = document.getElementById("app") as HTMLElement;
app.append(login.getContent());
