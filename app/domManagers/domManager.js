import {inputDate, time} from '../fixtures/constans';

const element = document.createElement('div');

export function clearInputDate() {
  inputDate.value = '';
}

export const createElementTime = (data) => {
  element.className = 'result-time';
  element.textContent = data;

  time.appendChild(element);
};

export const updateElementTime = (data) => {
  element.className = 'result-time';
  element.textContent = data;

  time.appendChild(element);
};

