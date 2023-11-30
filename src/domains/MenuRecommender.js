import AsianMenu from './menu/AsianMenu.js';
import ChinaMenu from './menu/ChinaMenu.js';
import WestMenu from './menu/WestMenu.js';
import KorMenu from './menu/KorMenu.js';
import JapMenu from './menu/JapMenu.js';
import paramType from '../lib/src/paramType.js';
import { Random } from '@woowacourse/mission-utils';
import { NotEatMenuInputError } from '../errors/UserInputErros.js';

const RANGE = {
  MIN_INCLUDE: 1,
  MAX_INCLUDE: 5,
};

const createRandomNubmers = () => {
  const result = new Map();
  while (result.size < 5) {
    const randomNumber = Random.pickNumberInRange(
      RANGE.MIN_INCLUDE,
      RANGE.MAX_INCLUDE,
    );

    if (result.has(randomNumber) && result.get(randomNumber) >= 3) continue;

    result.set(randomNumber, result.get(randomNumber) + 1 || 1);
  }

  return result;
};

export default class MenuRecommender {
  #menus = new Map([
    [1, new JapMenu()],
    [2, new KorMenu()],
    [3, new ChinaMenu()],
    [4, new AsianMenu()],
    [5, new WestMenu()],
  ]);

  constructor() {}

  getMenus(notEatMenus, _ = paramType(notEatMenus, Array)) {
    const category = this.#getCategory();
    const result = category.map((menu) => menu.getMenu(notEatMenus));

    // {name : '코치', 추천음식 : ''}
    return result;
  }

  #getCategory() {
    const randomNumbers = createRandomNubmers();
    const category = [...randomNumbers].map((number) =>
      this.#menus.get(number),
    );

    return category;
  }

  validateNotEatMenu(notEatMenus, _ = paramType(notEatMenus, 'string')) {
    const splittedNotEatMenu = notEatMenus.split(',');

    [...splittedNotEatMenu].forEach((notEatMenu) => {
      this.#validateMenu(notEatMenu);
    });
  }

  #validateMenu(notEatMenu, _ = paramType(notEatMenu, 'string')) {
    if (![...this.#menus].some(([_, menu]) => menu.has(notEatMenu))) {
      throw new NotEatMenuInputError('해당 음식은 메뉴에 존재하지 않습니다.');
    }
  }

  #pickRandomCategory(randomNumber, _ = paramType(randomNumber, 'number')) {
    if (!this.#menus.has(randomNumber)) {
      throw new NotEatMenuInputError('메뉴가 존재하지 않습니다.');
    }

    return this.#menus.get(randomNumber);
  }
}
