import FOOD from '../../constant/food';
import Menu from './menu';

class Korean extends Menu {
  constructor() {
    super();
    this.setMenu(FOOD.KOREAN);
    this.category = '한식';
  }
}

export default Korean;
