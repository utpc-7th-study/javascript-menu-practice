import { CATEGORIES } from '../constants/category.js';

class Category {
  #categories;

  constructor() {
    this.#categories = new Map();
    this.#set();
  }

  #set() {
    CATEGORIES.forEach((category) => {
      this.#categories.set(category.number, category.name);
    });
  }

  choose(numbers) {
    let recommendedCategories = [];
    numbers.forEach((number) => {
      recommendedCategories.push(this.#categories.get(number));
    });

    return recommendedCategories;
  }
}

export default Category;
