import dayjs from 'dayjs';

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

function duration(start, end) {
  const startDate = dayjs(start);
  const endDate = dayjs(end);
  return `${endDate.diff(startDate, 'hour')}H ${endDate.diff(startDate, 'minute') % 60}M`;
}


export { getRandomArrayElement, toDay, toTime, duration };

