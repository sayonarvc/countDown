import {createElementTime} from './app/domManagers/domManager';
import {calculateBtn} from './app/fixtures/constans';
import {logicCalculateTime, updateTimeInterval} from './app/logic/logicCalculateTime';

let updateIntervalId = null;

function showTime() {
  const data = logicCalculateTime();
  createElementTime(data);
}

function showUpdateTime() {
  if (updateIntervalId) {
    clearInterval(updateIntervalId);
  }

  updateIntervalId = setInterval(updateTimeInterval, 1000);
}


function handleShowDateTime(e) {
  e.preventDefault();
  showTime();
  showUpdateTime();
}

calculateBtn.addEventListener('click', handleShowDateTime);