import { Random } from '@woowacourse/mission-utils';

const generateRandomNumbers = () => {
  return Random.pickNumberInRange(1, 5);
};

export default generateRandomNumbers;
