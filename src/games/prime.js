import readlineSync from 'readline-sync';
import { randomNumber, isRightAnswer } from '../utils.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const prime = () => {
  const isPrimeNumber = randomNumber(100);
  const rightAnswer = isPrime(isPrimeNumber) ? 'yes' : 'no';
  console.log(`Question: ${isPrimeNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return isRightAnswer(rightAnswer, userAnswer);
};

const primeGameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export { prime, primeGameDescription };
