import { Random } from '@woowacourse/mission-utils';

class Menu {
  #menus = [];

  setMenu(menu) {
    this.#menus = menu;
  }

  recommend() {
    const shuffleNumber = Random.shuffle(this.#menus)[0] - 1;

    return this.#menus[shuffleNumber];
  }

  koreanCategory() {
    return this.category;
  }
}

export default Menu;
