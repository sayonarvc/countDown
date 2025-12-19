import {inputDate} from '../fixtures/constans';
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInSeconds,
  differenceInYears,
  parseISO
} from 'date-fns';
import {isValidFutureDate} from '../validate/validate';
import {updateElementTime} from '../domManagers/domManager';

export function logicCalculateTime() {
  const dateTime = inputDate.value;

  const currentDateTime = new Date();
  const futureDateTime = parseISO(dateTime);

  if (!isValidFutureDate(futureDateTime)) {
    alert('Дата должна быть больше текущей');
    return null;
  }

  //--- Высчитывается разница по методу из либы date-fns
  //--- в () возвращаю текущий год и прибавляю разницу и все это устанавливаю как новое значение
  const years = differenceInYears(futureDateTime, currentDateTime);
  currentDateTime.setFullYear(currentDateTime.getFullYear() + years);

  const months = differenceInMonths(futureDateTime, currentDateTime);
  currentDateTime.setMonth(currentDateTime.getMonth() + months);

  const days = differenceInDays(futureDateTime, currentDateTime);
  currentDateTime.setDate(currentDateTime.getDate() + days);

  const hours = differenceInHours(futureDateTime, currentDateTime);
  currentDateTime.setHours(currentDateTime.getHours() + hours);

  const minutes = differenceInMinutes(futureDateTime, currentDateTime);
  currentDateTime.setMinutes(currentDateTime.getMinutes() + minutes);

  const seconds = differenceInSeconds(futureDateTime, currentDateTime);

  const result = `${days} days, ${months} months, ${years} years, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

  return result;
}

export function updateTimeInterval() {
  const result = logicCalculateTime();

  updateElementTime(result);
}
