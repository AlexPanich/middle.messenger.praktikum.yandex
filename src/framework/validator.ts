export type ValidateRules = {
  [fieldName: string]: {
    rule: RegExp | ((value: string) => boolean);
    errorMessage: string;
  }[];
};

export interface Validate {
  test: (fieldName: string, value: string) => boolean | string[];
}

export default class Validator implements Validate {
  static defaultRegexp = {
    text: /\w+/,
    password: /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,}$/,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    name: /^([А-Яа-яA-Za-z0-9_]{1,20})$/,
    phone: /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/,
  };

  constructor(private rules: ValidateRules) {}

  public test(fieldName: string, value: string): true | string[] {
    const errors: string[] = [];

    this.rules[fieldName].forEach(({ rule, errorMessage }) => {
      if (rule instanceof RegExp && !rule.test(value)) {
        errors.push(errorMessage);
      } else if (typeof rule === "function" && !rule(value)) {
        errors.push(errorMessage);
      }
    });

    return errors.length > 0 ? errors : true;
  }
}
