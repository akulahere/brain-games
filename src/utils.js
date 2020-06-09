// get random number [minNumber, maxNumber)
const getRandomNumber = (minNumber = 1, maxNumber = 10) => Math.floor(Math.random() * maxNumber)
    + minNumber;

export default getRandomNumber;
