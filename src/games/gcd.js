import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const getGcdLevel = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const gcdCalc = (first, second) => {
    if (second === 0) {
      return first;
    }
    return gcdCalc(second, first % second);
  };
  const rightAnswer = String(gcdCalc(firstNumber, secondNumber));
  return [question, rightAnswer];
};

const gcdGameDescription = 'Find the greatest common divisor of given numbers.';

const runGcdGame = () => {
  runGame(getGcdLevel, gcdGameDescription);
};

export default runGcdGame;
