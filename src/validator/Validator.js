const Validator = {
  nameLength(coaches) {
    if (coaches.some((name) => name.length < 2 || name.length > 4)) {
      throw new Error('코치의이름은 2자 이상, 4자 이하여야 합니다.');
    }
  },
};

export const validateCoaches = (coaches) => {
  Validator.nameLength(coaches);
};

export const validateMenus = (menus) => {};
