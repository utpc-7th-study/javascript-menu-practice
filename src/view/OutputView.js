import { Console } from '@woowacourse/mission-utils';
import paramType from '../lib/src/paramType.js';

const OutputView = {
  printRecommnedMenuStart() {
    this.onPrint('점심 메뉴 추천을 시작합니다.\n');
  },

  printError(message, _ = paramType(message, 'string')) {
    this.onPrint(message);
  },

  onPrint(message, _ = paramType(message, 'string')) {
    Console.print(message);
  },
};

export default OutputView;
