import { MENUS } from '../constants/menu.js';
import RandomShuffler from './RandomShuffler.js';

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
    const index = RandomShuffler.shuffle();

    return menus[index - 1];
  }
}

export default Menu;
