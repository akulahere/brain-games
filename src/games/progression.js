import { getRandomNumber } from '../utils.js';
import runGame from '../index.js';

const getProgressionQuestion = (progressionSize, progressionStep,
  progressionStartNumber, hiddenElementIndex) => {
  const question = [];
  for (let i = 0; i < progressionSize; i += 1) {
    const element = i !== hiddenElementIndex ? progressionStartNumber + progressionStep * i : '..';
    question.push(element);
  }
  return question.join(' ');
};

const progressionSize = 10;

const getProgressionLevel = () => {
  const progressionStep = getRandomNumber(1, 10);
  const hiddenElementIndex = getRandomNumber(0, progressionSize - 1);
  const progressionStartNumber = getRandomNumber(1, 100);
  const question = getProgressionQuestion(progressionSize, progressionStep,
    progressionStartNumber, hiddenElementIndex);
  const answer = String(progressionStartNumber + progressionStep * hiddenElementIndex);
  return [question, answer];
};

const progressionGameDescription = 'What number is missing in the progression?';

const runProgressionGame = () => {
  runGame(getProgressionLevel, progressionGameDescription);
};

export default runProgressionGame;
