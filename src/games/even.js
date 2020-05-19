import readlineSync from 'readline-sync';
import { randomNumber, isRightAnswer } from '../utils.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');


const askIsEven = () => {
  const isEvenNumber = randomNumber(100);
  const rightAnswer = isEven(isEvenNumber);
  console.log(`Question: ${isEvenNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return isRightAnswer(rightAnswer, userAnswer);
};

const evenGameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
export { askIsEven, evenGameDescription };
