import dataBase from '../dataBase.js';
import generateRandomNumbers from '../util/generateRandomNumbers.js';
import Coach from './Coach.js';

class MenuRecommendation {
  #coaches;

  constructor() {
    this.#coaches = new Map();
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
    const randomNumbers = this.#getGenerateRandomNumber();
    const recommendMenus = this.#getRecommendMenus(randomNumbers);
    const category = this.#getCategory(randomNumbers);

    return { category, recommendMenus };
  }

  #getCategory(randomNumbers) {
    return randomNumbers.map((randomNumber) => this.#generateRandomCategory(randomNumber));
  }

  #getRecommendMenus(randomNumbers) {
    const result = [];

    this.#coaches.forEach((coach) => {
      result.push(this.#recommendMenuEachCoach(coach, randomNumbers));
    });

    return result;
  }

  #recommendMenuEachCoach(coach, randomNumbers) {
    return randomNumbers.map((randomNumber) => coach.recommendMenu(randomNumber));
  }

  getCoaches() {
    return [...this.#coaches.keys()];
  }

  #generateRandomCategory(randomNumber) {
    return dataBase.filter((item) => item.id === randomNumber).map((item) => item.category)[0];
  }

  #getGenerateRandomNumber() {
    return generateRandomNumbers();
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
