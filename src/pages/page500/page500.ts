import { Block } from "../../framework/block";
import compiledTemplate from "./page500.hbs";
import data from "./page500-data";
import "../../helpers/handlebarsHelpers";
import "../../layouts/empty/empty";
import ErrorPageContent, {
  Props as ErrorPageContentProps,
} from "../../components/errorPageContent/errorPageContent";
import "./page500.scss";

type Props = {
  content: ErrorPageContentProps;
};

export default class Page500 extends Block {
  constructor(props: Props) {
    super(props, {
      errorPageContent: {
        component: ErrorPageContent,
        getProps: (props: Props) => ({ ...props.content }),
      },
    });
  }

  render() {
    return compiledTemplate({
      components: {
        errorPageContent: this.getChildId("errorPageContent"),
      },
    });
  }
}

const page500 = new Page500(data);

const app = document.getElementById("app") as HTMLElement;
app.append(page500.getOuterElement());
