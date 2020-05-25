import readlineSync from 'readline-sync';

const randomNumber = (maxNumber = 10) => Math.floor(Math.random() * maxNumber) + 1;

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);
  return name;
};

const welcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
};

const isRightAnswer = (rightAnswer, userAnswer) => {
  if (String(rightAnswer) === userAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}`);
  return false;
};

export {
  randomNumber,
  askName,
  welcomeMessage,
  isRightAnswer,
};
