import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readCoachNames() {
    return await Console.readLineAsync('코치의 이름을 입력해 주세요. (, 로 구분)\n');
  },

  async readInEdibleMenu(coachName) {
    return await Console.readLineAsync(`\n${coachName}(이)가 못 먹는 메뉴를 입력해 주세요.\n`);
  },
};

export default InputView;
