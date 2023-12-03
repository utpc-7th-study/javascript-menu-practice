import { Random } from '@woowacourse/mission-utils';

const generateRandomNumbers = () => {
  const result = [];

  while (result.length < 5) {
    const randomNumbers = Random.pickNumberInRange(1, 5);

    if (result.filter((numbers) => numbers === randomNumbers).length < 2) {
      result.push(randomNumbers);
    }
  }

  return result;
};

export default generateRandomNumbers;
