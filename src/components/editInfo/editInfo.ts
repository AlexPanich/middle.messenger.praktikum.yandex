import { Block } from "../../framework/block";
import { Validate } from "../../framework/validator";
import compiledTemplate from "./editInfo.hbs";
import {
  getDefaultListenerForFormSubmit,
  getDefaultListenersForValidation,
} from "../../helpers/validateHelpers";
import "./editInfo.scss";

export type EditInfoItem = {
  ruName: string;
  value: string;
  name: string;
  type: string;
};

type Props = {
  data: EditInfoItem[];
  redirectUrl: string;
};

type ValidatorProps = {
  validator: Validate;
};

export default class EditInfo extends Block {
  constructor(props: Props & ValidatorProps) {
    const { validator, ...restProps } = props;
    super({
      ...restProps,
      events: [
        ...getDefaultListenersForValidation(
          validator,
          "input",
          "edit-info__value--error"
        ),
        getDefaultListenerForFormSubmit(
          validator,
          "form",
          "edit-info__value--error"
        ),
      ],
    });
  }

  render() {
    const context = this.createCompileContext();
    return compiledTemplate(context);
  }
}
