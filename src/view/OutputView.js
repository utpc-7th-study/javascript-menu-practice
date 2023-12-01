import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constant/menu';

const OutputView = {
  SPERATOR: '|',

  recommendStart() {
    Console.print(MESSAGE.GREETING);
  },

  printResult(category, recommendData) {
    const message = [
      '메뉴 추천 결과입니다.',
      `[ 구분 ${this.SPERATOR} 월요일 ${this.SPERATOR} 화요일 ${this.SPERATOR} 수요일 ${this.SPERATOR} 목요일 ${this.SPERATOR} 금요일 ]`,
    ];
    message.push(`[ 카테고리 ${this.SPERATOR} ${category.join(` ${this.SPERATOR} `)} ]`);
    recommendData.forEach((menu, coach) => {
      const name = coach.getName();
      message.push(`[ ${name} ${this.SPERATOR} ${menu.join(` ${this.SPERATOR} `)} ]`);
    });
    message.push(`\n${MESSAGE.COMPLETE}`);

    Console.print(message.join('\n'));
  },

  print(message) {
    Console.print(message);
  },
};

export default OutputView;
