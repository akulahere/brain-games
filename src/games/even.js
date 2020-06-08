import randomNumber from '../utils.js';
import runGame from '../index.js';


const isEvenAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

const askIsEven = () => {
  const question = randomNumber(100);
  const rightAnswer = isEvenAnswer(question);
  return [question, rightAnswer];
};

const evenGameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEvenGame = () => {
  runGame(askIsEven, evenGameDescription);
};

export default runEvenGame;
