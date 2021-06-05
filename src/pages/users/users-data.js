import myAratarIcon from "../../images/my-avatar.svg";
import chatIcon from "../../images/chat.svg";
import userIcon from "../../images/user.svg";
import logOutIcon from "../../images/log-out.svg";
import contact1Icon from "../../images/contact1.svg";
import contact2Icon from "../../images/contact2.svg";
import contact3Icon from "../../images/contact3.svg";
import contact4Icon from "../../images/contact4.svg";
import contact5Icon from "../../images/contact5.svg";
import contact6Icon from "../../images/contact6.svg";

const data = {
  blocks: {
    left: true,
    center: true,
    right: true,
  },
  controls: {
    top: {
      link: "/profile.html",
      avatar: myAratarIcon,
    },
    center: [
      {
        icon: chatIcon,
        link: "/change-chat.html",
      },
      {
        icon: userIcon,
        active: true,
      },
    ],
    bottom: {
      link: "/login.html",
      icon: logOutIcon,
    },
  },
  contacts: {
    list: [
      {
        avatar: contact1Icon,
        nickName: "Василий Петров",
      },
      {
        avatar: contact2Icon,
        nickName: "Ольга",
      },
      {
        avatar: contact3Icon,
        nickName: "Cristina",
      },
      {
        avatar: contact4Icon,
        nickName: "Henadii",
      },
      {
        avatar: contact5Icon,
        nickName: "Владимир",
      },
      {
        avatar: contact6Icon,
        nickName: "Галя",
      },
    ],
  },
  profile: {
    avatar: contact2Icon,
    name: "Ольга",
    data: [
      {
        key: "Почта",
        value: "olga.buzova@yandex.ru",
      },
      {
        key: "Логин",
        value: "olyabus",
      },
      {
        key: "Имя",
        value: "Ольга",
      },
      {
        key: "Фамилия",
        value: "Бузова",
      },
      {
        key: "Имя в чате",
        value: "Ольга",
      },
      {
        key: "Телефон",
        value: "+7 (999) 777 55 00",
      },
    ],
  },
};

export default data;
