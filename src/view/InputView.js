import { Console } from '@woowacourse/mission-utils';

const InputView = {
  getCoaches() {
    const coaches = Console.readLineAsync(
      '코치의 이름을 입력해 주세요. (, 로 구분)'
    );
    return coaches.split(',');
  },
  getCantTryMenu(coach) {
    const menu = Console.readLineAsync(
      `${coach}(이)가 못 먹는 메뉴를 입력해 주세요.`
    );
    return menu.split(',');
  },
};
