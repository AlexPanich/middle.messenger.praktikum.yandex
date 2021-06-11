import { Block } from "../../framework/block";
import compiledTemplate from "./profileContent.hbs";
import Aratar from "../avatar/avatar";
import Info, { InfoItem } from "../info/info";
import EditInfo, { EditInfoItem } from "../editInfo/editInfo";
import "./profileContent.scss";

export type Props = {
  avatar: string;
  name?: string;
  data: InfoItem[] | EditInfoItem[];
  edit?: boolean;
  changeAvatar?: boolean;
  redirectUrl?: string;
};

export default class ProfileContent extends Block {
  constructor(props: Props) {
    super(props, {
      avatar: {
        component: Aratar,
        getProps: (props: Props) => ({ link: props.avatar, size: 192 }),
      },
      info: {
        component: Info,
        getProps: (props: Props) => ({ data: props.data }),
      },
      editInfo: {
        component: EditInfo,
        getProps: (props: Props) => ({
          data: props.data,
          redirectUrl: props.redirectUrl,
        }),
      },
    });
  }

  render() {
    return compiledTemplate({
      ...this.props,
      components: {
        avatar: this.getChildContent("avatar"),
        info: this.getChildContent("info"),
        editInfo: this.getChildContent("editInfo"),
      },
    });
  }
}
