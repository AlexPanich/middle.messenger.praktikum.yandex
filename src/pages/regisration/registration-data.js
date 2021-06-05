const data = {
  form: {
    formId: "registrationForm",
    title: "Регистрация",
    fields: [
      {
        name: "email",
        type: "text",
        placeholder: "Почта",
      },
      {
        name: "login",
        type: "text",
        placeholder: "Логин",
      },
      {
        name: "firstName",
        type: "text",
        placeholder: "Имя",
      },
      {
        name: "lastName",
        type: "text",
        placeholder: "Фамилия",
      },
      {
        name: "phone",
        type: "text",
        placeholder: "Телефон",
      },
      {
        name: "password",
        type: "password",
        placeholder: "Пароль",
      },
      {
        name: "confirmPassword",
        type: "password",
        placeholder: "Поторите пароль",
      },
    ],
    submitButton: {
      text: "Зарегистрироваться",
    },
    altLink: {
      link: "/login.html",
      text: "Войти",
    },
  },
};

export default data;
