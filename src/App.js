import MenuRecommendation from './domain/MenuRecommendation.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  #menuRecommendation;

  constructor() {
    this.#menuRecommendation = new MenuRecommendation();
  }

  async play() {
    await this.#registerCoachNamesProcess();
    const coaches = this.#menuRecommendation.getCoaches();
    await this.#inEdibleMenuProcess(coaches);
  }

  async #registerCoachNamesProcess() {
    while (true) {
      try {
        const coachNames = await InputView.readCoachNames();
        this.#menuRecommendation.registerCoaches(coachNames);
        break;
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  }

  async #inEdibleMenuProcess(coaches) {
    for (let i = 0; i < coaches.length; i++) {
      await this.#readInEdibleMenuProcess(coaches[i]);
    }
  }

  async #readInEdibleMenuProcess(coachName) {
    while (true) {
      try {
        const inEdibleMenu = await InputView.readInEdibleMenu(coachName);
        this.#menuRecommendation.setInEdibleMenu(inEdibleMenu, coachName);
        break;
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  }
}

const app = new App();
app.play();

export default App;
