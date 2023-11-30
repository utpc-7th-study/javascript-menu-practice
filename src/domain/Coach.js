class Coach {
  #coachName;
  #inEdibleMenu;

  constructor(coachName) {
    this.#validateCoachName(coachName);
    this.#coachName = coachName;
    this.inEdibleMenu = '';
  }

  getCoachName() {
    return this.#coachName;
  }

  setInEdibleMenu(inEdibleMenu) {
    this.#validateInEdibleMenu(inEdibleMenu);

    this.#inEdibleMenu = inEdibleMenu;
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
  }
}

export default Coach;
