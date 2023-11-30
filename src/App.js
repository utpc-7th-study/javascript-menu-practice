import MenuRecommendation from './domain/MenuRecommendation.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

const SAMPLE = {
  일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
  한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
  중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
  아시안: '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
  양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
};

class App {
  #menuRecommendation;

  constructor() {
    this.#menuRecommendation = new MenuRecommendation();
  }

  async play() {
    await this.#registerCoachNamesProcess();
    const coaches = this.#menuRecommendation.getCoaches();
    await this.#inEdibleMenuProcess(coaches);
  }

  async #registerCoachNamesProcess() {
    while (true) {
      try {
        const coachNames = await InputView.readCoachNames();
        this.#menuRecommendation.registerCoaches(coachNames);
        break;
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  }

  async #inEdibleMenuProcess(coaches) {
    for (let i = 0; i < coaches.length; i++) {
      await this.#readInEdibleMenuProcess(coaches[i]);
    }
  }

  async #readInEdibleMenuProcess(coachName) {
    while (true) {
      try {
        const inEdibleMenu = await InputView.readInEdibleMenu(coachName);
        break;
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  }
}

const app = new App();
app.play();

export default App;
