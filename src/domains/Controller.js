import Category from './Category.js';
import Coach from './Coach.js';
import RandomNumberArray from './RandomNumberArray.js';

import InputView from '../views/InputView.js';

import { WEEKDAY } from '../constants/weekday.js';

class Controller {
  #coaches;
  #categories;

  constructor() {
    this.#coaches = [];
    this.#categories = new Map();
  }

  readCoachNames() {
    const coaches = InputView.readCoaches();

    return coaches;
  }

  readHateMenus(coach) {
    const hateMenus = InputView.readHateMenus(coach);

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

  setCoaches(name) {
    this.#coaches.push(new Coach(name));
  }

  recommend() {
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
}

export default Controller;
