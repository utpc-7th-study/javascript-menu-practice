import { Random } from '@woowacourse/mission-utils';
import { CATEGORIES } from '../constants/category.js';

const RandomNumber = {
  create() {
    return Random.pickNumberInRange(1, CATEGORIES.LENGTH);
  },
};

export default RandomNumber;
