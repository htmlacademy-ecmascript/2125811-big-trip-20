import { getRandomArrayElement } from '../utils.js';
import { DESCRIPTIONS } from '../const.js';

const mockPoints = [
  {
    type: 'taxi',
    destination: {
      description: getRandomArrayElement(DESCRIPTIONS),
      name: 'Amsterdam',
      photo: ['https://loremflickr.com/248/152?random=5',
        'https://loremflickr.com/248/152?random=6']
    },
    basePrice: 1100,
    dateFrom: new Date('2019-09-11T08:00:00.375Z'),
    dateTo: new Date('2019-09-11T12:36:00.375Z'),

    isFavorite: false,
    offers: [
      {
        'type': 'taxi',
        'title': 'Upgrade to a business class',
        'price': 154
      },
      {
        'type': 'train',
        'title': 'Book a taxi at the arrival point',
        'price': 97
      }
    ],
  },
  {
    type: 'bus',
    destination: {
      description: getRandomArrayElement(DESCRIPTIONS),
      name: 'Chamonix',
      photo: ['https://loremflickr.com/248/152?random=9',
        'https://loremflickr.com/248/152?random=10']
    },
    basePrice: 1200,
    dateFrom: new Date('2019-04-16T12:00:00.375Z'),
    dateTo: new Date('2019-04-16T16:55:00.375Z'),

    isFavorite: true,
    offers: [
      {
        'type': 'taxi',
        'title': 'Upgrade to a business class',
        'price': 145
      },
      {
        'type': 'bus',
        'title': 'Book a taxi at the arrival point',
        'price': 55
      }
    ],
  },
  {
    type: 'train',
    destination: {
      description: getRandomArrayElement(DESCRIPTIONS),
      name: 'Moscow',
      photo: ['https://loremflickr.com/248/152?random=11',
        'https://loremflickr.com/248/152?random=15']
    },
    basePrice: 1500,
    dateFrom: new Date('2019-04-17T16:28:00.375Z'),
    dateTo: new Date('2019-04-17T20:30:00.375Z'),

    isFavorite: true,
    offers: [
      {
        'type': 'taxi',
        'title': 'Upgrade to a business class',
        'price': 175
      },
      {
        'type': 'bus',
        'title': 'Book a taxi at the arrival point',
        'price': 75
      }
    ],
  }
];

function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}
export { getRandomPoint };
