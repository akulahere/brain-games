// get random number [minNumber, maxNumber)
const getRandomNumber = (minNumber = 1, maxNumber = 10) => Math.floor(Math.random() * maxNumber)
    + minNumber;

const getRandomArrayItem = (array) => array[getRandomNumber(0, array.length - 1)];

export { getRandomNumber, getRandomArrayItem };
