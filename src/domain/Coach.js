import dataBase from '../dataBase.js';
import shuffle from '../util/shuffle.js';

class Coach {
  #coachName;
  #recommendedMenuHistory;
  #inEdibleMenu;

  constructor(coachName) {
    this.#validateCoachName(coachName);

    this.#coachName = coachName;
    this.#inEdibleMenu = [];
    this.#recommendedMenuHistory = [];
  }

  setInEdibleMenu(inEdibleMenu) {
    this.#validateInEdibleMenu(inEdibleMenu);

    inEdibleMenu.split(',').forEach((item) => this.#inEdibleMenu.push(item));
  }

  recommendMenu(randomNumbers) {
    let randomMenu = this.#getRandomMenu(randomNumbers);

    while (this.#isIncludeGetMenu(randomMenu)) {
      randomMenu = this.#getRandomMenu(randomNumbers);
    }

    this.#recommendedMenuHistory.push(randomMenu);

    return { coachName: this.#coachName, randomMenu };
  }

  #isIncludeGetMenu(randomMenu) {
    if (this.#recommendedMenuHistory.includes(randomMenu)) return true;
    if (this.#inEdibleMenu.includes(randomMenu)) return true;

    return false;
  }

  #getRandomMenu(randomNumber) {
    const randomCategory = dataBase
      .filter(({ id }) => id === randomNumber)
      .map(({ items }) => items)
      .flat();

    const randomMenuIdx = shuffle()[0];
    const randomMenu = randomCategory[randomMenuIdx - 1];

    return randomMenu;
  }

  #validateCoachName(coachName) {
    this.#validateEmpty(coachName);
    this.#validateCoachNameLength(coachName);
    this.#validateCoachNameIncludeSpace(coachName);
  }

  #validateEmpty(coachName) {
    if (coachName.trim('') === '') {
      throw new Error('[ERROR] 빈값은 입력할 수 없습니다.');
    }
  }

  #validateCoachNameLength(coachName) {
    if (coachName.length < 2) {
      throw new Error('[ERROR] 코치의 이름은 2글자 ~ 4글자만 가능합니다.');
    }

    if (coachName.length > 4) {
      throw new Error('[ERROR] 코치의 이름은 2글자 ~ 4글자만 가능합니다.');
    }
  }

  #validateCoachNameIncludeSpace(coachName) {
    const isCoachNameValid = !/\s/g.test(coachName);

    if (!isCoachNameValid) {
      throw new Error('[ERROR] 코치의 이름에 공백이 포함되어 있으면 안됩니다.');
    }
  }

  #validateInEdibleMenu(inEdibleMenu) {
    if (inEdibleMenu.trim('') === '') return;

    const splitedInEdibleMenu = inEdibleMenu.split(',');
    this.#validateInEdibleMenuMaxLength(splitedInEdibleMenu);
    this.#validateInEdibleMenuNotFoundMenu(splitedInEdibleMenu);
  }

  #validateInEdibleMenuMaxLength(splitedInEdibleMenu) {
    if (splitedInEdibleMenu.length > 2) {
      throw new Error('[ERROR] 못 먹는 메뉴는 최대 2개만 가능합니다.');
    }
  }

  #validateInEdibleMenuNotFoundMenu(splitedInEdibleMenu) {
    const menues = dataBase.map((item) => item.items).flat();
    const isValidMenu = splitedInEdibleMenu.every((menu) => menues.includes(menu));

    if (!isValidMenu) {
      throw new Error('[ERROR] 메뉴판에 없는 메뉴입니다.');
    }
  }
}

export default Coach;
