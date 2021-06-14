import { Block } from "../../framework/block";
import compiledTemplate from "./page404.hbs";
import data from "./page404-data";
import "../../helpers/handlebarsHelpers";
import "../../layouts/empty/empty";
import ErrorPageContent, {
  Props as ErrorPageContentProps,
} from "../../components/errorPageContent/errorPageContent";
import "./page404.scss";

type Props = {
  content: ErrorPageContentProps;
};

export default class Page404 extends Block {
  constructor(props: Props) {
    super(props, {
      errorPageContent: {
        component: ErrorPageContent,
        getProps: (props: Props) => ({ ...props.content }),
      },
    });
  }

  render() {
    const context = this.createCompileContext();
    return compiledTemplate(context);
  }
}

const page404 = new Page404(data);

const app = document.getElementById("app") as HTMLElement;
app.append(page404.getOuterElement());
