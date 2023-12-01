import FOOD from '../../constant/food';
import Menu from './menu';

class Chinese extends Menu {
  constructor() {
    super();
    this.setMenu(FOOD.CHINESE);
    this.category = '중식';
  }
}

export default Chinese;
