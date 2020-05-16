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

export { askName, askIsEven };
