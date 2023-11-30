import paramType from '../../lib/src/paramType.js';
import Menu from './Menu.js';

export default class AsianMenu extends Menu {
  constructor() {
    super(
      '아시안',
      ['팟타이,카오 팟,나시고렝,파인애플 볶음밥,쌀국수,똠얌꿍,반미,월남쌈,분짜']
        .join(',')
        .split(','),
    );
  }

  _getMenus(notEatMenus, _ = paramType(notEatMenus, Array)) {
    return this.menus;
  }
}
