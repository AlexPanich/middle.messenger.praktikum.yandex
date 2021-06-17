import { Block } from "../../framework/block";
import compiledTemplate from "./search.hbs";
import "./search.scss";

export type Props = {};

export default class Search extends Block {
  render() {
    const context = this.createCompileContext();
    return compiledTemplate(context);
  }
}
