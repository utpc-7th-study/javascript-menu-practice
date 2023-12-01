import FOOD from '../../constant/food';
import Menu from './menu';

class Asian extends Menu {
  constructor() {
    super();
    this.setMenu(FOOD.ASIAN);
    this.category = '아시안';
  }
}

export default Asian;
