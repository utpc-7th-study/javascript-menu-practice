const Validator = {
  nameLengthOf(coaches) {
    if (coaches.some((name) => name.length < 2 || name.length > 4)) {
      throw new Error('코치의 이름은 2자 이상, 4자 이하여야 합니다.');
    }
  },

  numbersOf(coaches) {
    if (coaches.length < 2 || coaches.length > 5) {
      throw new Error('코치의 수는 2명 이상, 5명 이하여야 합니다.');
    }
  },
};

export const validateCoaches = (coaches) => {
  Validator.nameLengthOf(coaches);
  Validator.numbersOf(coaches);
};

export const validateMenus = (menus) => {};
