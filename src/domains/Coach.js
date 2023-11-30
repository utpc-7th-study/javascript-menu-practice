import Menu from './Menu.js';

class Coach {
  #name;
  #hateMenus;
  #recommendedMenus;

  constructor(name) {
    this.#name = name;
    this.#hateMenus = [];
    this.#recommendedMenus = new Map();
  }

  hate(menus) {
    this.#hateMenus = menus;
  }

  #isHated(menu) {
    return this.#hateMenus.includes(menu);
  }

  #included(menu) {
    return Array.from(this.#recommendedMenus.values()).includes(menu);
  }

  chooseMenu(day, category) {
    const menus = new Menu();
    const recommendedMenu = menus.choose(category);

    if (this.#isHated(recommendedMenu) || this.#included(recommendedMenu)) {
      return this.chooseMenu(day, category);
    }

    this.#recommendedMenus.set(day, recommendedMenu);
  }
}

export default Coach;
