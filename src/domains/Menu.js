import { Random } from '@woowacourse/mission-utils';
import { MENUS } from '../constants/menu.js';

class Menu {
  #menus;

  constructor() {
    this.#menus = new Map();
    this.#set();
  }

  #set() {
    Object.entries(MENUS).forEach(([category, menus]) => {
      this.#menus.set(category, menus.split(', '));
    });
  }

  choose(category) {
    const menus = this.#menus.get(category);
    const index = Random.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9])[0];

    return menus[index - 1];
  }
}

export default Menu;
