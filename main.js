import {clearInputDate, createElementTime} from './app/domManagers/domManager';
import {calculateBtn} from './app/fixtures/constans';

function handleShowDateTime(e) {
  e.preventDefault();
  createElementTime();
  clearInputDate();
}

calculateBtn.addEventListener('click', handleShowDateTime);