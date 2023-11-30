import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readCoaches() {
    const coachNames = await Console.readLineAsync(
      '코치의 이름을 입력해 주세요. (, 로 구분)\n'
    );

    return coachNames.split(',');
  },

  async readHateMenus(coach) {
    const menus = await Console.readLineAsync(
      `\n${coach}(이)가 못 먹는 메뉴를 입력해 주세요.\n`
    );

    return menus.split(',');
  },
};

export default InputView;
