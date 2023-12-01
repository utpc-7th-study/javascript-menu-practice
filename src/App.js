import { Random } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, MAX, MIN } from './constant/menu';
import Coach from './domain/coach';
import RecommendMachine from './domain/recommendMachine';
import isKorean from './utils/isKorean';
import stringToArray from './utils/stringToArray';
import InputView from './view/InputView';
import OutputView from './view/OutputView';

class App {
  #recommendMachine = new RecommendMachine();

  #recommendData = new Map();

  #categoryNumbers = [];

  async play() {
    OutputView.recommendStart();
    await this.#enterCoachNames();

    this.#recommendData.forEach(async (_, coach) => {
      await this.#enterCannotEatFoods(coach);
    });

    this.#recommendMenu();

    OutputView.printResult(this.#getKoreanCategory(), this.#recommendData);
  }

  #getKoreanCategory() {
    const koreanCategory = this.#categoryNumbers.map((categoryNumber) =>
      this.#recommendMachine.category(categoryNumber),
    );

    return koreanCategory;
  }

  #recommendMenu() {
    this.#applyCategory();

    this.#recommendData.forEach((menu, coach) => {
      this.#categoryNumbers.forEach((categoryNumber) => {
        const recommendMenu = this.#recommendMachine.recommend(categoryNumber);

        if (coach.canEat(recommendMenu) && !menu.includes(recommendMenu)) {
          menu.push(recommendMenu);
        }
      });
    });
  }

  #applyCategory() {
    while (this.#categoryNumbers.length < 5) {
      const randomNumber = Random.pickNumberInRange(MIN.RANDOM_NUM, MAX.RANDOM_NUM) - 1;
      if (!this.#categoryNumbers.includes(randomNumber)) {
        this.#categoryNumbers.push(randomNumber);
      }
    }
  }

  async #enterCoachNames() {
    while (this.#recommendData.size === 0) {
      try {
        const coachNameInput = await InputView.askCoachNames();
        this.#validateCoachNameInput(coachNameInput);
        const coaches = stringToArray(coachNameInput);
        coaches.forEach((name) => {
          this.#recommendData.set(new Coach(name), []);
        });
        break;
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  }

  async #enterCannotEatFoods(coach) {
    while (true) {
      try {
        const cannotEatFoodInput = await InputView.askCannotEatFoods(coach.getName());
        this.#validateCannotEatFoodInput(cannotEatFoodInput);
        const cannotEatFoods = stringToArray(cannotEatFoodInput);
        cannotEatFoods.forEach((foodName) => {
          coach.addCannotEatFood(foodName);
        });
        break;
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  }

  #validateCoachNameInput(coachNameInput) {
    const coaches = stringToArray(coachNameInput);
    if (coaches.length < MIN.COACH || coaches.length > MAX.COACH) {
      throw new Error(ERROR_MESSAGE.LESS_COACH);
    }
  }

  #validateCannotEatFoodInput(cannotEatFoodInput) {
    const cannotEatFoods = stringToArray(cannotEatFoodInput);
    if (cannotEatFoods.length > MAX.CANNOT_EAT_MENU) {
      throw new Error(ERROR_MESSAGE.OVER_CANNOT_EAT_MENU);
    }

    cannotEatFoods.forEach((food) => {
      if (!isKorean(food)) {
        throw new Error(ERROR_MESSAGE.NOT_KOREAN);
      }
    });
  }
}

export default App;
