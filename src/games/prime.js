import randomNumber from '../utils.js';

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
  const question = `Question: ${isPrimeNumber}`;
  return [question, rightAnswer];
};

const primeGameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export { prime, primeGameDescription };
