import { Random } from '@woowacourse/mission-utils';
import { SERVICE } from '../constants/Constants.js';

class Recommand {
  #pamplet;
  #coaches;
  #notEatMenu;

  constructor(coaches, notEatMenu) {
    this.#coaches = coaches;
    this.#notEatMenu = notEatMenu;
    this.#pamplet = SERVICE.pamplet;
  }

  choiceCategory() {
    const categories = Object.keys(this.#pamplet);
    const selectedCategory = new Array();
    for (let i = 0; i < 5; i += 1) {
      selectedCategory.push(categories[Random.pickNumberInRange(1, 5) - 1]);
    }
    return selectedCategory;
  }

  recommandMenu(category) {
    const menu = Object.entries(this.#pamplet)
      .filter(([key, value]) => key === category)
      .flatMap(([key, value]) => value.split(',').map((menu) => menu.trim()));
    const randomNum = Random.pickNumberInRange(0, menu.length - 1);

    return menu[randomNum];
  }

  returnMenu(category) {
    const coachesObj = this.#coaches.reduce((acc, name) => {
      return { ...acc, [name]: this.recommandMenu(category) };
    }, {});

    return coachesObj;
  }

  generateWeekMenus(categories) {
    const oneWeek = 5;
    const totalRecommand = this.#coaches.reduce((acc, name) => {
      return { ...acc, [name]: [] };
    }, {});

    for (let i = 0; i < oneWeek; i += 1) {
      const dayRecommand = this.returnMenu(categories[i]);
      Object.keys(totalRecommand).forEach((coach) => {
        if (dayRecommand.hasOwnProperty(coach)) {
          const menuArray = dayRecommand[coach].split(',');
          totalRecommand[coach] = totalRecommand[coach].concat(menuArray);
        }
      });
    }

    return totalRecommand;
  }
}

export default Recommand;
