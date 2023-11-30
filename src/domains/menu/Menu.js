import { Random } from '@woowacourse/mission-utils';
import paramType from '../../lib/src/paramType.js';
import shuffleArray from '../../utils/shuffleArray.js';

export default class Menu {
  constructor(
    category,
    menus,
    _0 = paramType(category, 'string'),
    _1 = paramType(menus, Array),
  ) {
    this.category = category;
    this.menus = menus;
  }

  getMenu(notEatMenus, _ = paramType(notEatMenus, Array)) {
    const FIRST = 0;
    const menus = this._getMenus(notEatMenus);
    const possibleEatAllMenu =
      notEatMenus.length === 1 && notEatMenus[0] === '';
    const menuWithoutNotEat = !!possibleEatAllMenu
      ? [...menus]
      : [...menus].filter((menu) => !notEatMenus.includes(menu));
    const shuffledMenu = shuffleArray(menuWithoutNotEat)[FIRST];

    return shuffledMenu;
  }

  _getMenus(notEatMenu, _ = paramType(notEatMenu, Array)) {
    throw new Error('must be override');
  }

  has(menu, _ = paramType(menu, 'string')) {
    if (this.constructor.name === 'Menu') {
      throw new Error('서브클래스에서만 호출해주세요');
    }

    return this.menus.includes(menu);
  }
}
