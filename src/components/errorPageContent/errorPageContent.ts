import { Block } from "../../framework/block";
import compiledTemplate from "./errorPageContent.hbs";
import "./errorPageContent.scss";

export type Props = {
  code: number;
  message: string;
  returnLink: {
    link: string;
    text: string;
  };
};

export default class ErrorPageContent extends Block {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const context = this.createCompileContext();
    return compiledTemplate(context);
  }
}
