import Category from './Category.js';
import Coach from './Coach.js';
import RandomNumberArray from './RandomNumberArray.js';

import OutputView from '../views/OutputView.js';
import InputView from '../views/InputView.js';

import hasError from '../utils/hasError.js';
import { validateCoaches, validateMenus } from '../validator/Validator.js';
import { WEEKDAY } from '../constants/weekday.js';

class Controller {
  #coaches;
  #categories;

  constructor() {
    this.#coaches = new Map();
    this.#categories = new Map();
    OutputView.printStartMessgae();
  }

  async readCoachNames() {
    const coaches = await InputView.readCoaches();

    if (hasError(validateCoaches, coaches)) {
      return await this.readCoachNames();
    }

    return coaches;
  }

  async readHateMenus(coach) {
    const hateMenus = await InputView.readHateMenus(coach);

    if (hasError(validateMenus, hateMenus)) {
      return await this.readHateMenus(coach);
    }

    return hateMenus;
  }

  recommendCategory() {
    const category = new Category();
    const numbers = RandomNumberArray.create();
    const categories = category.choose(numbers);
    this.#setCategories(categories);
  }

  #setCategories(categories) {
    categories.forEach((category, index) =>
      this.#categories.set(WEEKDAY[index], category)
    );
  }

  setCoaches(names) {
    names.forEach((name) => {
      this.#coaches.set(name, new Coach(name));
    });
  }

  setHateMenus(name, menus) {
    const coach = this.#coaches.get(name);
    coach.hate(menus);
  }

  recommendMenus() {
    this.#coaches.forEach((coach) => {
      this.#informCategoryTo(coach);
    });
  }

  #informCategoryTo(coach) {
    WEEKDAY.forEach((DAY) => {
      const category = this.#categories.get(DAY);
      coach.chooseMenu(DAY, category);
    });
  }

  showResult() {
    OutputView.printRecommendResult(this.#categories, this.#coaches);
  }
}

export default Controller;
