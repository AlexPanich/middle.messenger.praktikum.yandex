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
        active: true,
      },
      {
        link: "/users.html",
        icon: userIcon,
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
        message: "Добрый вечер...",
        time: "12:35",
        newMessages: 2,
      },
      {
        avatar: contact2Icon,
        nickName: "Ольга",
        message: "Я приехала встре...",
        time: "11:15",
        newMessages: 1,
      },
      {
        avatar: contact3Icon,
        nickName: "Cristina",
        message: "Было так хорошо...",
        time: "Пт",
      },
      {
        avatar: contact4Icon,
        nickName: "Henadii",
        message: "В пятницу ожидаетс...",
        time: "Ср",
      },
      {
        avatar: contact5Icon,
        nickName: "Владимир",
        message: "фазы луны и прав...",
        time: "1 мая 2020",
      },
      {
        avatar: contact6Icon,
        nickName: "Галя",
        message: "Добрый вечер...",
        time: "25 апреля 2020",
      },
    ],
  },
  content: {
    message: "Выберите чат чтобы отправить сообщение",
  },
};

export default data;
