import Category from './Category.js';
import Coach from './Coach.js';
import RandomNumberArray from './RandomNumberArray.js';

import { WEEKDAY } from '../constants/weekday.js';

class Controller {
  #coaches;
  #categories;

  constructor() {
    this.#coaches = [];
    this.#categories = new Map();
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
}

export default Controller;
