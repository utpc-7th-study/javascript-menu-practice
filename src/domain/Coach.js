class Coach {
  #coachName;

  constructor(coachName) {
    this.#validate(coachName);
    this.#coachName = coachName;
  }

  #validate(coachName) {
    this.#validateEmpty(coachName);
  }

  #validateEmpty(coachName) {
    if (coachName.trim('') === '') {
      throw new Error('[ERROR] 빈값은 입력할 수 없습니다.');
    }
  }
}

export default Coach;
