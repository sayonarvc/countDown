import {inputDate, time} from '../fixtures/constans';

export const dataDateTime = inputDate.value;
const element = document.createElement('div');

export const createElementTime = (data) => {
  element.className = 'result-time';
  element.textContent = data;

  time.appendChild(element);
};

export const updateElementTime = (data) => {
  element.className = 'result-time';
  element.textContent = '';
  element.textContent = data;

  time.appendChild(element);
};

