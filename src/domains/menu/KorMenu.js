import paramType from '../../lib/src/paramType.js';
import Menu from './Menu.js';

export default class KorMenu extends Menu {
  constructor() {
    super(
      '한식',
      ['김밥,김치찌개,쌈밥,된장찌개,비빔밥,칼국수,불고기,떡볶이,제육볶음']
        .join(',')
        .split(','),
    );
  }

  _getMenus(notEatMenus, _ = paramType(notEatMenus, Array)) {
    return [...this.menus];
  }
}
