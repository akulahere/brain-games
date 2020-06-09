import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const getRandomOperatorSymbol = () => {
  const operatorsSymbols = ['+', '-', '*'];
  const operatorIndex = getRandomNumber(0, 3);
  const operatorSymbol = operatorsSymbols[operatorIndex];
  return operatorSymbol;
};

const getCalcLevel = () => {
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);
  let rightAnswer;
  const currentOperation = getRandomOperatorSymbol();

  switch (currentOperation) {
    case '+':
      rightAnswer = String(firstNumber + secondNumber);
      break;
    case '-':
      rightAnswer = String(firstNumber - secondNumber);
      break;
    case '*':
      rightAnswer = String(firstNumber * secondNumber);
      break;
    default:
      throw new Error('Unknown operation');
  }
  const question = `${firstNumber} ${currentOperation} ${secondNumber}`;
  return [question, rightAnswer];
};

const calcGameDescription = 'What is the result of the expression?';

const runCalcGame = () => {
  runGame(getCalcLevel, calcGameDescription);
};

export default runCalcGame;
