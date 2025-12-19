import {clearInputDate, createElementTime} from './app/domManagers/domManager';
import {calculateBtn} from './app/fixtures/constans';
import {logicCalculateTime} from './app/logic/logicCalculateTime';

function showTime() {
  const data = logicCalculateTime();
  createElementTime(data);
}


function handleShowDateTime(e) {
  e.preventDefault();
  showTime();
  clearInputDate();
}

calculateBtn.addEventListener('click', handleShowDateTime);