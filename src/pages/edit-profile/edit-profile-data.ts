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
    avatar: myAvatarIcon,
    redirectUrl: "/profile.html",
    data: [
      {
        name: "email",
        ruName: "Почта",
        value: "aleksandr@yandex.ru",
        type: "email",
        hint: "Пример: example@host.ru",
        placeholder: "email",
      },
      {
        name: "login",
        ruName: "Логин",
        value: "aleksivanov",
        type: "text",
        placeholder: "Логин",
        hint: "Пример: ivan123",
      },
      {
        name: "firstName",
        ruName: "Имя",
        value: "Александр",
        type: "text",
        placeholder: "Имя",
        hint: "Пример: Ivan",
      },
      {
        name: "lastName",
        ruName: "Фамилия",
        value: "Иванов",
        type: "text",
        placeholder: "Фамилия",
        hint: "Пример: Ivanov",
      },
      {
        name: "nickName",
        ruName: "Имя в чате",
        value: "Шурик",
        type: "text",
        placeholder: "Ник-нэйм",
        hint: "Пример: ciberWarior",
      },
      {
        name: "phone",
        ruName: "Телефон",
        value: "+7 909 967 30 30",
        type: "tel",
        placeholder: "Телефон",
        hint: "Пример: +7 (777) 777 77 77",
      },
    ],
  },
};

export default data;
