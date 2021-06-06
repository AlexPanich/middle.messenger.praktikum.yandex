import myAratarIcon from "../../images/my-avatar.svg";
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
        link: "/profile.html",
      },
      {
        icon: editIcon,
        active: true,
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
    redirectUrl: "/profile.html",
    data: [
      {
        name: "email",
        ruName: "Почта",
        value: "aleksandr@yandex.ru",
        type: "text",
      },
      {
        name: "login",
        ruName: "Логин",
        value: "aleksivanov",
        type: "text",
      },
      {
        name: "firstName",
        ruName: "Имя",
        value: "Александр",
        type: "text",
      },
      {
        name: "lastName",
        ruName: "Фамилия",
        value: "Иванов",
        type: "text",
      },
      {
        name: "nickName",
        ruName: "Имя в чате",
        value: "Шурик",
        type: "text",
      },
      {
        name: "phone",
        ruName: "Телефон",
        value: "+7 (909) 967 30 30",
        type: "text",
      },
    ],
  },
};

export default data;
