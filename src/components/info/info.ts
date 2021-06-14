import { Block } from "../../framework/block";
import compiledTemplate from "./info.hbs";
import "./info.scss";

export type InfoItem = {
  ruName: string;
  value: string;
};

type Props = {
  data: InfoItem[];
};

export default class Info extends Block {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const context = this.createCompileContext();
    return compiledTemplate(context);
  }
}
