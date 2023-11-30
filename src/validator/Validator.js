const Validator = {
  nameLengthOf(coaches) {
    if (coaches.some((name) => name.length < 2 || name.length > 4)) {
      throw new Error('[ERROR] 코치의 이름은 2자 이상, 4자 이하여야 합니다.');
    }
  },

  numbersOf(coaches) {
    if (coaches.length < 2 || coaches.length > 5) {
      throw new Error('[ERROR] 코치의 수는 2명 이상, 5명 이하여야 합니다.');
    }
  },

  duplicationOf(inputs) {
    if (new Set(inputs).size !== inputs.length) {
      throw new Error('[ERROR] 동일한 값을 중복하여 입력했습니다.');
    }
  },
};

export const validateCoaches = (coaches) => {
  Validator.nameLengthOf(coaches);
  Validator.numbersOf(coaches);
  Validator.duplicationOf(coaches);
};

export const validateMenus = (menus) => {
  Validator.duplicationOf(menus);
};
