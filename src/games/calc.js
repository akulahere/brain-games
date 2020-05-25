import readlineSync from 'readline-sync';
import { randomNumber, isRightAnswer } from '../utils.js';

const calcGame = () => {
  const operationIndex = randomNumber(2);
  const firstNumber = randomNumber(10);
  const secondNumber = randomNumber(10);
  let rightAnswer;
  const operationSymbols = ['+', '-', '*'];
  const operationSymbol = operationSymbols[operationIndex - 1];
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
  console.log(`Question: ${firstNumber} ${operationSymbol} ${secondNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return isRightAnswer(rightAnswer, userAnswer);
};

const calcGameDescription = 'What is the result of the expression?';

export { calcGame, calcGameDescription };
