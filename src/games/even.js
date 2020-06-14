import { getRandomNumber } from '../utils.js';
import runGame from '../index.js';

const isEven = (num) => (num % 2 === 0);

const getEvenLevel = () => {
  const question = getRandomNumber(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const evenGameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEvenGame = () => {
  runGame(getEvenLevel, evenGameDescription);
};

export default runEvenGame;
