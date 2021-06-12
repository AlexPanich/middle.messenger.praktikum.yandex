import { Block } from "../../framework/block";
import compiledTemplate from "./search.hbs";
import "./search.scss";

export type Props = {};

export default class Search extends Block {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return compiledTemplate(this.props);
  }
}
