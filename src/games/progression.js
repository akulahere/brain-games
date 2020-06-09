import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const getProgressionLevel = () => {
  const progressionSize = 10;
  const progressionStep = getRandomNumber(1, 10);
  const answerIndex = getRandomNumber(0, 2);
  const progressionStartNumber = getRandomNumber(1, 100);
  const progressionArray = [progressionStartNumber];
  for (let i = 1; i < progressionSize; i += 1) {
    progressionArray.push(progressionStartNumber + progressionStep * i);
  }
  const rightAnswer = String(progressionArray[answerIndex]);
  progressionArray[answerIndex] = '..';
  const question = `Question: ${progressionArray.join(' ')}`;
  return [question, rightAnswer];
};

const progressionGameDescription = 'What number is missing in the progression?';

const runProgressionGame = () => {
  runGame(getProgressionLevel, progressionGameDescription);
};

export default runProgressionGame;
