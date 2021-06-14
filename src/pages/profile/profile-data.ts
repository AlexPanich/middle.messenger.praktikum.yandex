import myAvatarIcon from "../../images/my-avatar.svg";
import logOutIcon from "../../images/log-out.svg";
import backIcon from "../../images/left-arrow-icon.svg";
import infoIcon from "../../images/info-icon.svg";
import editIcon from "../../images/edit-icon.svg";
import changePasswordIcon from "../../images/change-password-icon.svg";

const data = {
  controls: {
    top: {
      link: "/change-chat.html",
      icon: backIcon,
    },
    center: [
      {
        icon: infoIcon,
        active: true,
      },
      {
        link: "/edit-profile.html",
        icon: editIcon,
      },
      {
        link: "/change-password.html",
        icon: changePasswordIcon,
      },
    ],
    bottom: {
      link: "/login.html",
      icon: logOutIcon,
    },
  },
  profile: {
    avatar: myAvatarIcon,
    name: "Александр",
    data: [
      {
        ruName: "Почта",
        value: "aleksandr@yandex.ru",
      },
      {
        ruName: "Логин",
        value: "aleksivanov",
      },
      {
        ruName: "Имя",
        value: "Александр",
      },
      {
        ruName: "Фамилия",
        value: "Иванов",
      },
      {
        ruName: "Имя в чате",
        value: "Шурик",
      },
      {
        ruName: "Телефон",
        value: "+7 (909) 967 30 30",
      },
    ],
  },
};

export default data;
