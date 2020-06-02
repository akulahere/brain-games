import randomNumber from '../utils.js';

const isEvenAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

const askIsEven = () => {
  const question = randomNumber(100);
  const rightAnswer = isEvenAnswer(question);
  return [question, rightAnswer];
};

const evenGameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export { askIsEven, evenGameDescription };
