import myAratarIcon from "../../images/my-avatar.svg";
import logOutIcon from "../../images/log-out.svg";
import backIcon from "../../images/left-arrow-icon.svg";
import infoIcon from "../../images/info-icon.svg";
import editIcon from "../../images/edit-icon.svg";
import changePasswordIcon from "../../images/change-password-icon.svg";

const data = {
  blocks: {
    left: true,
    center: false,
    right: true,
  },
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
    avatar: myAratarIcon,
    data: [
      {
        key: "Почта",
        value: "aleksandr@yandex.ru",
      },
      {
        key: "Логин",
        value: "aleksivanov",
      },
      {
        key: "Имя",
        value: "Александр",
      },
      {
        key: "Фамилия",
        value: "Иванов",
      },
      {
        key: "Имя в чате",
        value: "Шурик",
      },
      {
        key: "Телефон",
        value: "+7 (909) 967 30 30",
      },
    ],
  },
};

export default data;
