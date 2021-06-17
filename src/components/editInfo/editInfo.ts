import { Block } from "../../framework/block";
import Validator, { ValidateRules } from "../../framework/validator";
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
  placeholder?: string;
  hint?: string;
};

type Props = {
  data: EditInfoItem[];
  redirectUrl: string;
  validateRules: ValidateRules;
};

export default class EditInfo extends Block {
  registerEventListeners(props: Props) {
    const validator = new Validator(props.validateRules);
    return [
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
    ];
  }

  render() {
    const context = this.createCompileContext();
    return compiledTemplate(context);
  }
}
