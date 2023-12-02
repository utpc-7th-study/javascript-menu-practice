import { Random } from '@woowacourse/mission-utils';

const RandomNumber = {
  create() {
    return Random.pickNumberInRange(1, 5);
  },
};

export default RandomNumber;
