import { MENUS } from '../constants/menu.js';

const isIncludedInMenus = (menu) => {
  let isIncluded = false;
  Object.entries(MENUS).forEach(([_, menus]) => {
    const menuArray = menus.split(', ');
    if (menuArray.includes(menu)) {
      isIncluded = true;
      return false;
    }
  });

  return isIncluded;
};

const Validator = {
  nameLengthOf(coaches) {
    if (coaches.some((name) => name.length < 2 || name.length > 4)) {
      throw new Error('[ERROR] 코치의 이름은 2자 이상, 4자 이하여야 합니다.');
    }
  },

  numbersOfCoaches(coaches) {
    if (coaches.length < 2 || coaches.length > 5) {
      throw new Error('[ERROR] 코치의 수는 2명 이상, 5명 이하여야 합니다.');
    }
  },

  numberOfMenus(menus) {
    if (menus.length > 2) {
      throw new Error('[ERROR] 못 먹는 메뉴는 2개 이하여야 합니다.');
    }
  },

  notIncluded(menus) {
    menus.forEach((menu) => {
      if (!isIncludedInMenus(menu)) {
        throw new Error('[ERROR] 메뉴판에 존재하지 않는 메뉴입니다.');
      }
    });
  },

  duplicationOf(inputs) {
    if (new Set(inputs).size !== inputs.length) {
      throw new Error('[ERROR] 동일한 값을 중복하여 입력했습니다.');
    }
  },
};

export const validateCoaches = (coaches) => {
  Validator.nameLengthOf(coaches);
  Validator.numbersOfCoaches(coaches);
  Validator.duplicationOf(coaches);
};

export const validateMenus = (menus) => {
  Validator.numberOfMenus(menus);
  Validator.notIncluded(menus);
  Validator.duplicationOf(menus);
};
