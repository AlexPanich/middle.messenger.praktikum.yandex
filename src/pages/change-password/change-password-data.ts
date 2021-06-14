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
        link: "/edit-profile.html",
        icon: editIcon,
      },
      {
        active: true,
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
        name: "oldPassword",
        ruName: "Старый пароль",
        value: "qwer1234",
        type: "password",
        placeholder: "Пароль",
        hint: "Пример: Qwer1234",
      },
      {
        name: "password",
        ruName: "Новый пароль",
        value: "qwerty123456",
        type: "password",
        placeholder: "Пароль",
        hint: "Пример: Qwer1234",
      },
      {
        name: "confirmPassword",
        ruName: "Повторите новый пароль",
        value: "qwerty123456",
        type: "password",
        placeholder: "Пароль",
        hint: "Пример: Qwer1234",
      },
    ],
  },
};

export default data;
