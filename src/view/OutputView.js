import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printStart() {
    Console.print('점심 메뉴 추천을 시작합니다.\n');
  },

  print(message) {
    Console.print(message);
  },

  printResult(results, coaches) {
    const { category, recommendMenus } = results;

    Console.print('\n메뉴 추천 결과입니다.');
    Console.print(`[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]`);

    this.printRecommendMenus(category, recommendMenus, coaches);
  },

  forMatCategory(categories) {
    return categories.reduce((result, category) => `${result} | ${category}`, '[ 카테고리') + ' ]';
  },

  forMatRecommendMenus(recommendMenus, coaches) {
    const result = coaches.reduce((template, coach, i) => {
      const menuList = recommendMenus[i].map(({ randomMenu }) => ` | ${randomMenu}`).join('');

      return `${template}\n[ ${coach}${menuList} ]`;
    }, '');

    return result;
  },

  printRecommendMenus(category, recommendMenus, coaches) {
    let template = '';
    template += this.forMatCategory(category);
    template += this.forMatRecommendMenus(recommendMenus, coaches);

    Console.print(template);
  },

  printEndRecommend() {
    Console.print('\n추천을 완료했습니다.');
  },
};

export default OutputView;
