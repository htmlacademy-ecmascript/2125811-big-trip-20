import { getRandomArrayElement } from '../utils.js';
import { DESCRIPTIONS } from '../const.js';

const mockPoints = [
  {
    type: 'taxi',
    destination: {
      description: getRandomArrayElement(DESCRIPTIONS),
      nameCity: 'Amsterdam',
      photo: ['https://loremflickr.com/248/152?random=5',
        'https://loremflickr.com/248/152?random=6']
    },
    basePrice: 1100,
    dateFrom: new Date('2019-07-11T11:22:13.375Z'),
    dateTo: new Date('2019-07-11T16:22:13.375Z'),

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
      nameCity: 'Chamonix',
      photo: ['https://loremflickr.com/248/152?random=9',
        'https://loremflickr.com/248/152?random=10']
    },
    basePrice: 1200,
    dateFrom: new Date('2019-07-161T11:22:13.375Z'),
    dateTo: new Date('2019-07-11T19:22:13.375Z'),

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
  }
];

export { mockPoints };
