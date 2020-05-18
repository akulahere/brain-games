import readlineSync from 'readline-sync';
import { randomNumber, isRightAnswer } from '../utils.js';

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
  console.log(`Question: ${progressionArray.join(' ')}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return isRightAnswer(rightAnswer, userAnswer);
};

const progressionGameDescription = 'What number is missing in the progression?';

export { progression, progressionGameDescription };
