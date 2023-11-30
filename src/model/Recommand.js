import { Random } from '@woowacourse/mission-utils';
import { SERVICE } from '../constants/Constants.js';
import Validator from '../validator/validator.js';

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
    const maxCategoryCount = 3;

    while (selectedCategory.length < 5) {
      const randomCategory = categories[Random.pickNumberInRange(1, 5) - 1];

      const categoryCount = selectedCategory.filter(
        (category) => category === randomCategory
      ).length;

      if (categoryCount < maxCategoryCount) {
        selectedCategory.push(randomCategory);
      }
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
    const validator = new Validator();
    const coachesObj = this.#coaches.reduce((acc, name) => {
      const notEatMenus = this.#notEatMenu[name];
      while (true) {
        try {
          const recommandMenu = this.recommandMenu(category);
          validator.IsValidMenu(recommandMenu, notEatMenus);
          return { ...acc, [name]: this.recommandMenu(category) };
        } catch (e) {}
      }
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
        console.log(dayRecommand[coach]);
        const menuArray = dayRecommand[coach];
        totalRecommand[coach] = totalRecommand[coach].concat(menuArray);
      });
    }

    return totalRecommand;
  }
}

export default Recommand;
