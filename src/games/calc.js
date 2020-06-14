import { getRandomNumber, getRandomArrayItem } from '../utils.js';
import runGame from '../index.js';

const calcResult = (first, second, operator) => {
  switch (operator) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
    default:
      throw new Error('Unknown operator');
  }
};

const getCalcLevel = () => {
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);
  const operators = ['+', '-', '*'];
  const currentOperator = getRandomArrayItem(operators);
  const rightAnswer = String(calcResult(firstNumber, secondNumber, currentOperator));
  const question = `${firstNumber} ${currentOperator} ${secondNumber}`;
  return [question, rightAnswer];
};

const calcGameDescription = 'What is the result of the expression?';

const runCalcGame = () => {
  runGame(getCalcLevel, calcGameDescription);
};

export default runCalcGame;
