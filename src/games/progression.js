import { getRandomNumber } from '../utils.js';
import runGame from '../index.js';

const progressionSize = 10;

const getProgressionQuestion = (step, startNumber, hiddenElementIndex) => {
  const question = [];
  for (let i = 0; i < progressionSize; i += 1) {
    const element = i !== hiddenElementIndex ? startNumber + step * i : '..';
    question.push(element);
  }
  return question.join(' ');
};


const getProgressionLevel = () => {
  const progressionStep = getRandomNumber(1, 10);
  const hiddenElementIndex = getRandomNumber(0, progressionSize - 1);
  const progressionStartNumber = getRandomNumber(1, 100);
  const question = getProgressionQuestion(progressionStep,
    progressionStartNumber, hiddenElementIndex);
  const answer = String(progressionStartNumber + progressionStep * hiddenElementIndex);
  return [question, answer];
};

const progressionGameDescription = 'What number is missing in the progression?';

const runProgressionGame = () => {
  runGame(getProgressionLevel, progressionGameDescription);
};

export default runProgressionGame;
