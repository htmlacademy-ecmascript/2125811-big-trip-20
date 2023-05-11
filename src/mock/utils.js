import dayjs from 'dayjs';
import { Duration } from './const.js';

const DAY_FORMAT = 'MMM DD';
const TIME_FORMAT = 'HH:mm';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function toDay(dateTime) {
  return dateTime ? dayjs(dateTime).format(DAY_FORMAT) : '';
}

function toTime(dateTime) {
  return dateTime ? dayjs(dateTime).format(TIME_FORMAT) : '';
}


function getRandomInteger(a = 0, b = 1) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
}

let date = dayjs().subtract(getRandomInteger(0, Duration.DAY), 'day').toDate();

function getDate({ next }) {
  const minsGap = getRandomInteger(0, Duration.MIN);
  const hoursGap = getRandomInteger(1, Duration.HOUR);
  const daysGap = getRandomInteger(1, Duration.DAY);

  if (next) {
    date = dayjs(date)
      .add(minsGap, 'minute')
      .add(hoursGap, 'hour')
      .add(daysGap, 'day')
      .toDate();
  }

  return date;
}

export { getRandomArrayElement, toDay, toTime, getRandomInteger, getDate };

