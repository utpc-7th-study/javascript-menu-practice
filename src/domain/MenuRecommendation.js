import dataBase from '../dataBase.js';
import generateRandomNumbers from '../util/generateRandomNumbers.js';
import Coach from './Coach.js';

class MenuRecommendation {
  #coaches;
  #categoryHistory;
  constructor() {
    this.#coaches = new Map();
    this.#categoryHistory = [];
  }

  registerCoaches(coachNames) {
    this.#validateCoachNames(coachNames);

    coachNames.split(',').forEach((coachName) => {
      this.#coaches.set(coachName, new Coach(coachName));
    });
  }

  setInEdibleMenu(inEdibleMenu, coachName) {
    this.#coaches.get(coachName).setInEdibleMenu(inEdibleMenu);
  }

  recommend() {
    const result = [];
    let randomNumbers = generateRandomNumbers();

    while (true) {
      if (this.#categoryHistory.filter((numbers) => numbers === randomNumbers).length < 2) {
        break;
      }
      randomNumbers = generateRandomNumbers();
    }
    this.#categoryHistory.push(randomNumbers);

    const category = dataBase
      .filter((item) => item.id === randomNumbers)
      .map((item) => item.category)[0];

    this.#coaches.forEach((coach) => {
      result.push(coach.recommend(randomNumbers));
    });

    return { category, result };
  }

  getCoaches() {
    const totalCoaches = [...this.#coaches.values()];

    return totalCoaches.map((coach) => coach.getCoachName());
  }

  #validateCoachNames(coachNames) {
    const splitedCoachNames = coachNames.split(',');

    this.#validateMinimumLimitCount(splitedCoachNames);
    this.#validateDuplicate(splitedCoachNames);
  }

  #validateMinimumLimitCount(splitedCoachNames) {
    if (splitedCoachNames.length < 2 || splitedCoachNames.length > 5) {
      throw new Error('[ERROR] 코치는 2명에서 5명만 가능합니다.');
    }
  }

  #validateDuplicate(splitedCoachNames) {
    const upperCaseSplitedCoachNames = splitedCoachNames.map((coachName) => {
      return coachName.toUpperCase();
    });

    if (new Set(splitedCoachNames).size !== splitedCoachNames.length) {
      throw new Error('[ERROR] 코치의 이름은 중복될 수 없습니다');
    }

    if (new Set(upperCaseSplitedCoachNames).size !== upperCaseSplitedCoachNames.length) {
      throw new Error('[ERROR] 코치의 이름은 중복될 수 없습니다');
    }
  }
}

export default MenuRecommendation;
