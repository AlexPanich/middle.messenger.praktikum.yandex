const data = {
  form: {
    formId: "loginForm",
    title: "Вход",
    fields: [
      {
        name: "login",
        type: "text",
        placeholder: "Логин",
      },
      {
        name: "password",
        type: "password",
        placeholder: "Пароль",
      },
    ],
    submitButton: {
      text: "Авторизоваться",
    },
    altLink: {
      link: "/registration.html",
      text: "Нет аккаунта?",
    },
  },
};

export default data;
