import readlineSync from 'readline-sync';

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);
  return name;
};

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

let gameAttempts = 0;

const askIsEven = (name) => {
  const randomNumber = Math.round(Math.random() * 100) + 1;
  console.log(`Question: ${randomNumber}`);
  const userAnswerAboutEven = readlineSync.question('Your answer: ');
  if (userAnswerAboutEven === isEven(randomNumber)) {
    gameAttempts += 1;
    if (gameAttempts === 3) {
      return console.log(`Congratulations, ${name}!`);
    }
    return askIsEven(name);
  }
  console.log(`${userAnswerAboutEven} is wrong answer ;(. Correct answer was ${isEven(randomNumber)}`);
  return console.log(`Let's try again, ${name}`);
};

const calcGame = (name) => {
  const randomNumber = () => Math.round(Math.random() * 10) + 1;
  const randomOperation = () => {
    const randomNumInRangeOneToThree = Math.round(Math.random() * 3) + 1;
    if (randomNumInRangeOneToThree === 1) {
      return '+';
    } if (randomNumInRangeOneToThree === 2) {
      return '-';
    }
    return '*';
  };
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const operation = randomOperation();
  let rightAnswer;
  switch (operation) {
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
      console.log('Error with random operation');
  }
  console.log(`Question: ${firstNumber} ${operation} ${secondNumber}`);
  const userAnswerAboutCalc = readlineSync.question('Your answer: ');
  if (userAnswerAboutCalc === String(rightAnswer)) {
    console.log('Correct!');
    gameAttempts += 1;
    if (gameAttempts === 3) {
      return console.log(`Congratulations, ${name}!`);
    }
    return calcGame(name);
  }
  console.log(`${userAnswerAboutCalc} is wrong answer ;(. Correct answer was ${rightAnswer}`);
  return console.log(`Let's try again, ${name}`);
};
export { askName, askIsEven, calcGame };
