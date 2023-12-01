import { Console } from '@woowacourse/mission-utils';
import { PROMPT_MESSAGE } from '../constant/menu';

const InputView = {
  async askCoachNames() {
    const coachNameInput = await Console.readLineAsync(PROMPT_MESSAGE.ENTER_NAMES);

    return coachNameInput;
  },

  async askCannotEatFoods(coachName) {
    const cannotEatFoodInput = await Console.readLineAsync(
      `${coachName}${PROMPT_MESSAGE.CANNOT_EAT_MENU}`,
    );

    return cannotEatFoodInput;
  },
};

export default InputView;
