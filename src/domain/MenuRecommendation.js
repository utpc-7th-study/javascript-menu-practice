import Coach from './Coach.js';

class MenuRecommendation {
  #coaches;

  constructor() {
    this.#coaches = new Map();
  }

  registerCoaches(coachNames) {
    this.#validateMinimumLimitCount(coachNames);

    coachNames.split(',').forEach((coachName) => {
      this.#coaches.set(coachName, new Coach(coachName));
    });
  }

  #validateMinimumLimitCount(coachNames) {
    const splitedCoachNames = coachNames.split(',');
    if (splitedCoachNames.length < 2 || splitedCoachNames.length > 5) {
      throw new Error('[ERROR] 코치는 2명에서 5명만 가능합니다.');
    }
  }
}

export default MenuRecommendation;
