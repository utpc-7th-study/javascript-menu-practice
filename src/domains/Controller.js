import Category from './Category.js';
import RandomNumberArray from './RandomNumberArray.js';

import { WEEKDAY } from '../constants/weekday.js';

class Controller {
  #categories;

  constructor() {
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
}

export default Controller;
