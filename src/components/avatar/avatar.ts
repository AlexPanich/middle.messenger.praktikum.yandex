import { Block } from "../../framework/block";
import compiledTemplate from "./avatar.hbs";
import "./avatar.scss";

type Props = {
  link: string;
  size: number;
};

export default class Avatar extends Block {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return compiledTemplate(this.props);
  }
}
