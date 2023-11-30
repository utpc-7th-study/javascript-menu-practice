import Category from './Category.js';
import Coach from './Coach.js';
import RandomNumberArray from './RandomNumberArray.js';

import OutputView from '../views/OutputView.js';
import InputView from '../views/InputView.js';

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

    return coaches;
  }

  async readHateMenus(coach) {
    const hateMenus = await InputView.readHateMenus(coach);

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
    WEEKDAY.forEach((day) => {
      const category = this.#categories.get(day);
      this.#recommendToCoaches(day, category);
    });
  }

  #recommendToCoaches(day, category) {
    this.#coaches.forEach((coach) => {
      coach.chooseMenu(day, category);
    });
  }

  showResult() {
    OutputView.printRecommendResult(this.#categories, this.#coaches);
  }
}

export default Controller;
