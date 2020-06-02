import { welcomeMessage, askName } from './utils.js';

const runGame = (game, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  console.log(gameDescription);
  for (let gameAttempts = 0; gameAttempts < 3; gameAttempts += 1) {
    const gameResult = game();
    if (gameResult === false) {
      console.log(`Let's try again, ${name}`);
      break;
    }
    if (gameAttempts === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default runGame;
