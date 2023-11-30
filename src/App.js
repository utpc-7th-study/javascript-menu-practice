import OutputView from './view/OutputView.js';
import InputView from './view/InputView.js';
import CoachList from './domains/CoachList.js';
import paramType from './lib/src/paramType.js';
import {
  UserInputError,
  CoachNamesInputError,
  NotEatMenuInputError,
} from './errors/UserInputErros.js';
import createErrorHandler from './utils/createErrorHandler.js';
import MenuRecommender from './domains/MenuRecommender.js';

const SPERATE_CHAR = ',';

class App {
  #coachList;

  async play() {
    OutputView.printRecommnedMenuStart();
    await this.#readCoachNames();
    await this.#readNotEatFoodOfCoach();
  }

  async #readCoachNames() {
    try {
      const userInput = await InputView.readCoachNames();
      this.#coachList = new CoachList(userInput);
    } catch (error) {
      return await this.#userInputErrorCatchHandler(error);
    }
  }

  // eslint-disable-next-line max-lines-per-function
  async #readNotEatFoodOfCoach() {
    while (this.#coachList.remainingNotAskCoach()) {
      try {
        const currentCoach = this.#coachList.getCurrentTunrCoach();
        const userInput = await InputView.readNotEatFood(currentCoach);
        new MenuRecommender().validateNotEatMenu(userInput);
        this.#coachList.setNotEatFoodOfCoach({
          currentCoach,
          notEatMenu: userInput.split(SPERATE_CHAR),
        });
        this.#coachList.proceedNextTurn();
      } catch (error) {
        return await this.#userInputErrorCatchHandler(error);
      }
    }
  }

  async #userInputErrorCatchHandler(error) {
    const errorOperator = new Map([
      [CoachNamesInputError, await this.#readCoachNames.bind(this)],
      [NotEatMenuInputError, await this.#readNotEatFoodOfCoach.bind(this)],
    ]);

    const errorHandler = createErrorHandler(errorOperator);

    return await errorHandler(error);
  }
}

const app = new App();
await app.play();

export default App;
