import { Console } from '@woowacourse/mission-utils';
import paramType from '../lib/src/paramType.js';

const InputView = {
  async readNotEatFood(coachName, _ = paramType(coachName, 'string')) {
    const userInput = await this.onRead(
      `${coachName}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
    );

    return userInput;
  },

  async readCoachNames() {
    const userInput = await this.onRead(
      '코치의 이름을 입력해 주세요. (, 로 구분)\n',
    );

    return userInput;
  },

  async onRead(message, _ = paramType(message, 'string')) {
    const userInput = await Console.readLineAsync(message);

    if (userInput === undefined) {
      throw new Error('유저 입력이 없습니다.\n');
    }

    return userInput.trim();
  },
};

export default InputView;
