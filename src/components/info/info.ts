import { Block } from "../../framework/block";
import compiledTemplate from "./info.hbs";
import "./info.scss";

export type InfoItem = {
  ruName: string;
  value: string;
};

export type Props = {
  data: InfoItem[];
};

export default class Info extends Block {
  render() {
    const context = this.createCompileContext();
    return compiledTemplate(context);
  }
}
