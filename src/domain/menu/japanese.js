import FOOD from '../../constant/food';
import Menu from './menu';

class Japanese extends Menu {
  constructor() {
    super();
    this.setMenu(FOOD.JAPANESE);
    this.category = '일식';
  }
}

export default Japanese;
