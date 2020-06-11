import { getRandomNumber, getRandomArrayItem } from '../utils.js';
import runGame from '../index.js';

const calcResult = (first, second, operation) => {
  switch (operation) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
    default:
      throw new Error('Unknown operation');
  }
};

const getCalcLevel = () => {
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);
  const operatorsSymbols = ['+', '-', '*'];
  const currentOperation = getRandomArrayItem(operatorsSymbols);
  const rightAnswer = String(calcResult(firstNumber, secondNumber, currentOperation));
  const question = `${firstNumber} ${currentOperation} ${secondNumber}`;
  return [question, rightAnswer];
};

const calcGameDescription = 'What is the result of the expression?';

const runCalcGame = () => {
  runGame(getCalcLevel, calcGameDescription);
};

export default runCalcGame;
