import { Random } from '@woowacourse/mission-utils';

class Recommand {
  #pamplet;

  constructor() {
    this.#pamplet = {
      일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
      한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
      중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
      아시안:
        '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
      양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
    };
  }

  choiceCategory() {
    const categories = Object.keys(this.#pamplet);
    const selectedCategory = categories[Random.pickNumberInRange(1, 5) - 1];
    return selectedCategory;
  }

  recommandMenu(category) {
    const menu = Object.entries(this.#pamplet)
      .filter(([key, value]) => key === category)
      .flatMap(([key, value]) => value.split(',').map((menu) => menu.trim()));
    const randomNum = Random.pickNumberInRange(0, menu.length - 1);

    return menu[randomNum];
  }

  returnMenu(coaches = [], category) {
    const coachesObj = coaches.reduce((acc, name) => {
      return { ...acc, [name]: this.recommandMenu(category) };
    }, {});

    return coachesObj;
  }

  generateWeekMenus() {}
}

const aa = new Recommand();

console.log(aa.returnMenu(['pobi', 'json', 'ace'], aa.choiceCategory()));
