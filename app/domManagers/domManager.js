import {inputDate, time} from '../fixtures/constans';
import {logicCalculateTime} from '../logic/logicCalculateTime';

export function clearInputDate() {
  inputDate.value = '';
}

export const createElementTime = () => {
  const element = document.createElement('div');
  element.className = 'result-time';
  element.textContent = logicCalculateTime();

  time.appendChild(element);
};
