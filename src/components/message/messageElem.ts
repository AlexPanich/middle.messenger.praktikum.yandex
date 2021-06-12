import { Block } from "../../framework/block";
import compiledTemplate from "./messageElem.hbs";
import "./messageElem.scss";

export type Props = {
  line?: boolean;
  inc?: boolean;
  out?: boolean;
  text?: string;
  time?: string;
  attachLink?: string;
};

export default class MessageElem extends Block {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const context = this.createCompileContext();
    return compiledTemplate(context);
  }
}
