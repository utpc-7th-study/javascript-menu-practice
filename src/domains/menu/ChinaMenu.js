import paramType from '../../lib/src/paramType.js';
import Menu from './Menu.js';

export default class ChinaMenu extends Menu {
  constructor() {
    super(
      '중식',
      [
        '깐풍기,볶음면,동파육,짜장면,짬뽕,마파두부,탕수육,토마토 달걀볶음,고추잡채',
      ]
        .join(',')
        .split(','),
    );
  }

  _getMenus(notEatMenus, _ = paramType(notEatMenus, Array)) {
    return this.menus;
  }
}
