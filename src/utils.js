import readlineSync from 'readline-sync';

const randomNumber = (maxNumber = 10) => Math.round(Math.random() * maxNumber) + 1;

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);
  return name;
};

const welcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
};

export { randomNumber, askName, welcomeMessage };
