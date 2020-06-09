import readlineSync from 'readline-sync';

const maxNumberOfGameAttempts = 3;

const runGame = (getLevel, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);
  let numberOfGameAttempts = 0;
  while (numberOfGameAttempts < maxNumberOfGameAttempts) {
    const [question, rightAnswer] = getLevel();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      return console.log(`Let's try again, ${name}!`);
    }
    console.log('Correct!');
    numberOfGameAttempts += 1;
  }
  return console.log(`Congratulations, ${name}!`);
};

export default runGame;
