import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printStart() {
    Console.print('점심 메뉴 추천을 시작합니다.\n');
  },

  print(message) {
    Console.print(message);
  },

  printResult(results) {
    let template = `[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]\n`;
    template += '[ 카테고리 |';

    results.forEach((item, idx) => {
      if (idx === 4) {
        template += ` ${item.category} ]`;
        return;
      }
      template += ` ${item.category} |`;
    });

    results.forEach(({ category, result }, idx) => {
      const { coachName, randomMenu } = result[0];
      if (idx === 0) {
        template += `\n[ ${coachName} | ${randomMenu}`;
        return;
      }

      if (idx === 4) {
        template += ` | ${randomMenu} ]`;
        return;
      }

      template += ` | ${randomMenu}`;
    });

    results.forEach(({ category, result }, idx) => {
      const { coachName, randomMenu } = result[1];
      if (idx === 0) {
        template += `\n[ ${coachName} | ${randomMenu}`;
        return;
      }

      if (idx === 4) {
        template += ` | ${randomMenu} ]`;
        return;
      }

      template += ` | ${randomMenu}`;
    });

    Console.print('\n메뉴 추천 결과입니다.');
    Console.print(template);
  },

  printEndRecommend() {
    Console.print('\n추천을 완료했습니다.');
  },
};

export default OutputView;
