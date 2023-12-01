import FOOD from '../constant/food';
import { ERROR_MESSAGE, MAX, MIN } from '../constant/menu';
import isKorean from '../utils/isKorean';

class Coach {
  #name = '';

  #cannotEatFoods = [];

  constructor(name) {
    this.#validateName(name);
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  addCannotEatFood(menu) {
    this.#validateMenu(menu);
    this.#cannotEatFoods.push(menu);
  }

  canEat(menu) {
    return !this.#cannotEatFoods.includes(menu);
  }

  #validateName(name) {
    if (!isKorean(name)) {
      throw new Error(ERROR_MESSAGE.NOT_KOREAN);
    }

    if (name.length < MIN.COACH_NAME_LENGTH || name.length > MAX.COACH_NAME_LENGTH) {
      throw new Error(ERROR_MESSAGE.INVALID_NAME_LENGTH);
    }
  }

  #validateMenu(menu) {
    if (!this.#isExistMenu(menu)) {
      throw new Error(ERROR_MESSAGE.INVALID_MENU);
    }
  }

  #isExistMenu(menu) {
    return Object.values(FOOD).some((menuDatas) => menuDatas.includes(menu));
  }
}

export default Coach;
