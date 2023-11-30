import Category from './Category.js';
import RandomNumberArray from './RandomNumberArray.js';

class Controller {
  constructor() {}

  recommendCategory() {
    const category = new Category();
    const numbers = RandomNumberArray.create();
    category.choose(numbers);
  }
}

export default Controller;
