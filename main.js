import {createElementTime} from './app/domManagers/domManager';
import {calculateBtn} from './app/fixtures/constans';
import {logicCalculateTime, updateTimeInterval} from './app/logic/logicCalculateTime';

function showTime() {
  const data = logicCalculateTime();
  createElementTime(data);
}

function showUpdateTime() {
  setInterval(updateTimeInterval, 1000);
}


function handleShowDateTime(e) {
  e.preventDefault();
  showTime();
  showUpdateTime();
}

calculateBtn.addEventListener('click', handleShowDateTime);