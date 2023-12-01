import FOOD from '../../constant/food';
import Menu from './menu';

class Western extends Menu {
  constructor() {
    super();
    this.setMenu(FOOD.WESTERN);
    this.category = '양식';
  }
}

export default Western;
