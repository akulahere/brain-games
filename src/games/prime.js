import { getRandomNumber } from '../utils.js';
import runGame from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrimeLevel = () => {
  const question = getRandomNumber(1, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const primeGameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runPrimeGame = () => {
  runGame(getPrimeLevel, primeGameDescription);
};

export default runPrimeGame;
