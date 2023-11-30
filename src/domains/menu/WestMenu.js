import paramType from '../../lib/src/paramType.js';
import Menu from './Menu.js';

export default class WestMenu extends Menu {
  constructor() {
    super(
      '양식',
      ['라자냐,그라탱,뇨끼,끼슈,프렌치 토스트,바게트,스파게티,피자,파니니']
        .join(',')
        .split(','),
    );
  }

  _getMenus(notEatMenus, _ = paramType(notEatMenus, Array)) {
    return this.menus;
  }
}
