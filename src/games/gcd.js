import randomNumber from '../utils.js';

const gcd = () => {
  const firstNumber = randomNumber(100);
  const secondNumber = randomNumber(100);
  const question = `${firstNumber} ${secondNumber}`;
  const gcdCalc = (first, second) => {
    if (second === 0) {
      return first;
    }
    return gcdCalc(second, first % second);
  };
  const rightAnswer = gcdCalc(firstNumber, secondNumber);
  return [question, rightAnswer];
};

const gcdGameDescription = 'Find the greatest common divisor of given numbers.';

export { gcd, gcdGameDescription };
