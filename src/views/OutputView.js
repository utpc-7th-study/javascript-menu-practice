import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printStartMessgae() {
    Console.print('점심 메뉴 추천을 시작합니다.\n');
  },

  printRecommendResult(categories, coaches) {
    Console.print('\n메뉴 추천 결과입니다.');

    this.printCategories(categories);
    this.printCoaches(coaches);

    Console.print('\n추천을 완료했습니다.');
  },

  printCategories(categories) {
    Console.print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');

    Console.print(
      `[ 카테고리 | ${categories.get('월요일')} | ${categories.get(
        '화요일'
      )} | ${categories.get('수요일')} | ${categories.get(
        '목요일'
      )} | ${categories.get('금요일')} }`
    );
  },

  printCoaches(coaches) {
    coaches.forEach((coach) =>
      this.printMenus(coach.getName(), coach.getRecommendedMenus())
    );
  },

  printMenus(coach, menus) {
    Console.print(
      `[ ${coach} | ${menus.get('월요일')} | ${menus.get(
        '화요일'
      )} | ${menus.get('수요일')} | ${menus.get('목요일')} | ${menus.get(
        '금요일'
      )} ]`
    );
  },
};

export default OutputView;
