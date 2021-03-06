import game from '..';
import getRandomNum from '../utils';

const description = 'What is the result of the expression?\n';
const minValue = 1;
const maxValue = 100;

const gameData = () => {
  const arg1 = getRandomNum(minValue, maxValue);
  const arg2 = getRandomNum(minValue, maxValue);
  const check = getRandomNum(1, 3);
  let question;
  let answer;
  switch (check) {
    case 1:
      question = `${arg1} * ${arg2}`;
      answer = `${arg1 * arg2}`;
      break;
    case 2:
      question = `${arg1} - ${arg2}`;
      answer = `${arg1 - arg2}`;
      break;
    case 3:
      question = `${arg1} + ${arg2}`;
      answer = `${arg1 + arg2}`;
      break;
    default:
      break;
  }
  return {
    question, answer,
  };
};

export default () => game(description, gameData);
