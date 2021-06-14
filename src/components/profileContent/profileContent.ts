import { Block, ChildrenProps } from "../../framework/block";
import compiledTemplate from "./profileContent.hbs";
import Avatar from "../avatar/avatar";
import Info, { InfoItem } from "../info/info";
import EditInfo, { EditInfoItem } from "../editInfo/editInfo";
import { Validate } from "../../framework/validator";
import "./profileContent.scss";

export type Props = {
  avatar: string;
  name?: string;
  data: InfoItem[] | EditInfoItem[];
  edit?: boolean;
  changeAvatar?: boolean;
  redirectUrl?: string;
};

type ValidatorProps = {
  validator?: Validate;
};

export default class ProfileContent extends Block {
  constructor(props: Props & ValidatorProps) {
    const { validator, ...restProps } = props;
    const children: ChildrenProps = {
      avatar: {
        component: Avatar,
        getProps: (props: Props) => ({ link: props.avatar, size: 192 }),
      },
    };
    if (props.edit) {
      children["editInfo"] = {
        component: EditInfo,
        getProps: (props: Props) => ({
          data: props.data,
          redirectUrl: props.redirectUrl,
          validator,
        }),
      };
    } else {
      children["info"] = {
        component: Info,
        getProps: (props: Props) => ({ data: props.data }),
      };
    }
    super(restProps, children);
  }

  render() {
    const components: { [name: string]: string } = {};
    if (this.props.edit) {
      components["editInfo"] = this.getChildId("editInfo");
    } else {
      components["info"] = this.getChildId("info");
    }

    const context = this.createCompileContext({ components });

    return compiledTemplate(context);
  }
}
