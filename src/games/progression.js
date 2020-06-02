import { randomNumber } from '../utils.js';

const progression = () => {
  const progressionSize = 10;
  const progressionStep = randomNumber(10);
  const answerIndex = randomNumber(10) - 1;
  const progressionStartNumber = randomNumber(100);
  const progressionArray = [progressionStartNumber];
  for (let i = 1; i < progressionSize; i += 1) {
    progressionArray.push(progressionStartNumber + progressionStep * i);
  }
  const rightAnswer = progressionArray[answerIndex];
  progressionArray[answerIndex] = '..';
  const question = `Question: ${progressionArray.join(' ')}`;
  return [question, rightAnswer];
};

const progressionGameDescription = 'What number is missing in the progression?';

export { progression, progressionGameDescription };
