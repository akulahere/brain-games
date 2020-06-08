import readlineSync from 'readline-sync';

const runGame = (getLevel, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);
  let gameAttempts = 0;
  let isPlayerWin = true;
  const maxGameAttempts = 3;
  while (gameAttempts < maxGameAttempts) {
    const [question, rightAnswer] = getLevel();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      isPlayerWin = false;
      break;
    }
    console.log('Correct!');
    gameAttempts += 1;
  }
  if (isPlayerWin) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default runGame;
