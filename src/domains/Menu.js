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
    const menu = Randoms.shuffle(menus)[0];

    return menu;
  }
}

export default Menu;
