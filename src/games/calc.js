import { randomNumber } from '../utils.js';

const calcGame = () => {
  const operationIndex = randomNumber(3);
  const firstNumber = randomNumber(10);
  const secondNumber = randomNumber(10);
  const operationSymbols = ['+', '-', '*'];
  const operationSymbol = operationSymbols[operationIndex - 1];
  const question = `${firstNumber} ${operationSymbol} ${secondNumber}`;
  let rightAnswer;
  switch (operationSymbol) {
    case '+':
      rightAnswer = firstNumber + secondNumber;
      break;
    case '-':
      rightAnswer = firstNumber - secondNumber;
      break;
    case '*':
      rightAnswer = firstNumber * secondNumber;
      break;
    default:
      console.log('Error with operation');
  }
  return [question, rightAnswer];
};

const calcGameDescription = 'What is the result of the expression?';

export { calcGame, calcGameDescription };
