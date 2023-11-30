import Recommand from '../model/Recommand.js';
import Validator from '../validator/validator.js';
import InputView from '../view/InputView.js';

class Controller {
  #validator;

  constructor() {
    this.#validator = new Validator();
  }

  async startRecommand() {
    const coaches = await InputView.getCoaches();
    const notEatMenu = await this.applyNotEatMenu(coaches);
    const recommand = new Recommand(coaches, notEatMenu);
  }

  async applyCoaches() {
    const coaches = await InputView.getCoaches();
    return coaches;
  }

  async applyNotEatMenu(coaches) {
    const coachesObj = coaches.reduce((acc, name) => {
      return { ...acc, [name]: [] };
    }, {});
    for (const coach of coaches) {
      const notEatMenu = await InputView.getCantEatMenu();
      coachesObj[coach] = notEatMenu.map((menu) => menu.trim());
    }

    return coachesObj;
  }
}

const aa = new Controller();

aa.startRecommand();
