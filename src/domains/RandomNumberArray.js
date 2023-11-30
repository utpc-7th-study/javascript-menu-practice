import RandomNumber from './RandomNumber.js';

const RandomNumberArray = {
  countSameNumber(arr, randomNumber) {
    return arr.filter((number) => number === randomNumber).length;
  },

  create() {
    let arr = [];
    while (arr.length < 5) {
      const randomNumber = RandomNumber.create();
      const sameNumberCount = this.countSameNumber(arr, randomNumber);

      if (sameNumberCount < 2) arr.push(randomNumber);
    }

    return arr;
  },
};

export default RandomNumberArray;
