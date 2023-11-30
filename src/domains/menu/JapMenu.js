import paramType from '../../lib/src/paramType.js';
import Menu from './Menu.js';

export default class JapMenu extends Menu {
  constructor() {
    super(
      '일식',
      ['규동,우동,미소시루,스시,가츠동,오니기리,하이라이스,라멘,오코노미야끼']
        .join(',')
        .split(','),
    );
  }

  _getMenus(notEatMenus, _ = paramType(notEatMenus, Array)) {
    return this.menus;
  }
}
