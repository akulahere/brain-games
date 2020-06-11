import { getRandomNumber, getRandomArrayItem } from '../utils.js';
import runGame from '../index.js';

const calcResult = (first, second, operation) => {
  let result;
  switch (operation) {
    case '+':
      result = String(first + second);
      break;
    case '-':
      result = String(first - second);
      break;
    case '*':
      result = String(first * second);
      break;
    default:
      throw new Error('Unknown operation');
  }
  return result;
};

const getCalcLevel = () => {
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);
  const operatorsSymbols = ['+', '-', '*'];
  const currentOperation = getRandomArrayItem(operatorsSymbols);
  const rightAnswer = calcResult(firstNumber, secondNumber, currentOperation);
  const question = `${firstNumber} ${currentOperation} ${secondNumber}`;
  return [question, rightAnswer];
};

const calcGameDescription = 'What is the result of the expression?';

const runCalcGame = () => {
  runGame(getCalcLevel, calcGameDescription);
};

export default runCalcGame;
