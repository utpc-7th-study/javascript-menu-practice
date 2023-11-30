import paramType from '../lib/src/paramType.js';

const shuffleArray = (array, _ = paramType(array, Array)) => {
  const numbers = Array.from({ length: array.length }, (_, idx) => idx);
  const copedArray = [...array];
  const shuffledArray = [...numbers].map((number) => copedArray[number]);

  return shuffledArray;
};

export default shuffleArray;
