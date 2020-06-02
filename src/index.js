import { askName } from './utils.js';
import readlineSync from "readline-sync";

const runGame = (game, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  console.log(gameDescription);
  for (let gameAttempts = 0; gameAttempts < 3; gameAttempts += 1) {
    const [question, rightAnswer] = game();
    console.log(`Question ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer != rightAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}`);
      console.log(`Let's try again, ${name}`);
      break;
    }
    console.log(`Correct`);
    if (gameAttempts === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default runGame;
