import { Random } from '@woowacourse/mission-utils';

const shuffle = () => {
  const result = Random.shuffle([1, 2, 3, 4, 5, 6, 7, 8]);

  return result;
};

export default shuffle;
