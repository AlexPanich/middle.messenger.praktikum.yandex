import { Block } from "../../framework/block";
import compiledTemplate from "./profileContent.hbs";
import Avatar, { Props as AvatarProps } from "../avatar/avatar";
import Info, { InfoItem, Props as InfoProps } from "../info/info";
import EditInfo, { EditInfoItem } from "../editInfo/editInfo";
import { ValidateRules } from "../../framework/validator";
import "./profileContent.scss";

export type Props = {
  avatar: string;
  name?: string;
  data: InfoItem[] | EditInfoItem[];
  edit?: boolean;
  changeAvatar?: boolean;
  redirectUrl?: string;
  validateRules?: ValidateRules;
};

export default class ProfileContent extends Block {
  registerComponents() {
    return {
      avatar: {
        component: Avatar,
        getProps: (props: Props): AvatarProps => ({
          link: props.avatar,
          size: 192,
        }),
      },
      editInfo: {
        component: EditInfo,
        getProps: (props: Props) => ({
          data: props.data,
          redirectUrl: props.redirectUrl,
          validateRules: props.validateRules,
        }),
      },
      info: {
        component: Info,
        getProps: (props: Props): InfoProps => ({ data: props.data }),
      },
    };
  }

  render() {
    const context = this.createCompileContext();
    return compiledTemplate(context);
  }
}
