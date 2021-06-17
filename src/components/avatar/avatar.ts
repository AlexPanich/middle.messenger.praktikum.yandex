import { Block } from "../../framework/block";
import compiledTemplate from "./avatar.hbs";
import "./avatar.scss";

export type Props = {
  link: string;
  size: number;
};

export default class Avatar extends Block {
  render() {
    const context = this.createCompileContext();
    return compiledTemplate(context);
  }
}
