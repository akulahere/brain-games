import readlineSync from 'readline-sync';

const randomNumber = (maxNumber = 10) => Math.floor(Math.random() * maxNumber) + 1;

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const isRightAnswer = (rightAnswer, userAnswer) => {
  if (String(rightAnswer) === userAnswer) {
    return true;
  }
  console.log();
  return false;
};

const printResult = (rightAnswer, userAnswer) => {
  isRightAnswer(rightAnswer, userAnswer) ? console.log('Correct')
      : console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}`);
}

export {
  randomNumber,
  askName,
  isRightAnswer,
  printResult
};
