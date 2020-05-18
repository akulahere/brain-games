import readlineSync from 'readline-sync';
import { randomNumber } from '../utils.js';

const gcd = () => {
  const firstNumber = randomNumber(100);
  const secondNumber = randomNumber(100);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const gcdCalc = (first, second) => {
    if (second === 0) {
      return first;
    }
    return gcdCalc(second, first % second);
  };
  const rightAnswer = gcdCalc(firstNumber, secondNumber);
  const userAnswer = readlineSync.question('Your answer: ');
  if (String(rightAnswer) === userAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}`);
  return false;
};

const gcdGameDescription = 'Find the greatest common divisor of given numbers.';

export { gcd, gcdGameDescription };
