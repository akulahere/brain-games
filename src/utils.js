export const getRandomNumber = (minNumber = 1, maxNumber = 10) => Math.floor(Math.random()
    * (maxNumber - minNumber + 1) + minNumber);

export const getRandomArrayItem = (array) => array[getRandomNumber(0, array.length - 1)];
