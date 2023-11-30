import dataBase from '../dataBase.js';
import shuffle from '../util/Shuffle.js';

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

  getCoachName() {
    return this.#coachName;
  }

  setInEdibleMenu(inEdibleMenu) {
    this.#validateInEdibleMenu(inEdibleMenu);
    const splitedMenu = inEdibleMenu.split(',');

    if (splitedMenu.length === 1) {
      this.#inEdibleMenu.push(inEdibleMenu);
    }

    if (splitedMenu.length === 2) {
      splitedMenu.forEach((item) => {
        this.#inEdibleMenu.push(item);
      });
    }
  }

  recommend(randomNumbers) {
    let randomMenu = this.#getRandomMenu(randomNumbers);

    while (this.#recommendedMenuHistory.includes(randomMenu)) {
      randomMenu = this.#getRandomMenu(randomNumbers);
    }

    while (this.#inEdibleMenu.includes(randomMenu)) {
      randomMenu = this.#getRandomMenu(randomNumbers);
    }

    this.#recommendedMenuHistory.push(randomMenu);
    this.#inEdibleMenu.push(randomMenu);

    return { coachName: this.#coachName, randomMenu };
  }

  #getRandomMenu(randomNumbers) {
    const randomCategory = dataBase
      .filter((item) => item.id === randomNumbers)
      .map((item) => item.items)
      .flat();

    const tmp = Object.keys(randomCategory).map((item) => Number(item));
    const randomMenuIdx = shuffle(tmp)[0];
    const randomMenu = randomCategory[randomMenuIdx];
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
    const splitedInEdibleMenu = inEdibleMenu.split(',');
    if (splitedInEdibleMenu.length === 0) return;

    if (splitedInEdibleMenu.length > 2) {
      throw new Error('[ERROR] 못 먹는 메뉴는 최대 2개만 가능합니다.');
    }

    const menues = dataBase.map((item) => item.items).flat();
    const isValidMenu = splitedInEdibleMenu.every((menu) => menues.includes(menu));

    if (!isValidMenu) {
      throw new Error('[ERROR] 메뉴판에 없는 메뉴입니다.');
    }
  }
}

export default Coach;
