import { getRandomArrayElement } from '../utils.js';
import { DESCRIPTIONS } from '../const.js';

const mockPoints = [
  {
    id: 1,
    type: 'taxi',
    destination: {
      id: 1,
      description: getRandomArrayElement(DESCRIPTIONS),
      name: 'Amsterdam',
      pictures: [
        {
          src: 'https://20.objects.pages.academy/static/destinations/13.jpg',
          description: 'Geneva famous for its crowded street markets with the best street food in Asia'
        },
        {
          src: 'https://20.objects.pages.academy/static/destinations/17.jpg',
          description: 'Geneva with an embankment of a mighty river as a centre of attraction'
        }
      ]
    },
    basePrice: 1100,
    dateFrom: new Date('2019-09-11T08:00:00.375Z'),
    dateTo: new Date('2019-09-11T12:36:00.375Z'),
    isFavorite: false,
    offers: [
      {
        type: 'taxi',
        offers: [
          {
            id: 1,
            title: 'Upgrade to a business class',
            price: 70
          },
          {
            id: 2,
            title: 'Drive slowly',
            price: 191
          }
        ]
      }
    ]
  },
  {
    id: 2,
    type: 'bus',
    destination: {
      id: 2,
      description: getRandomArrayElement(DESCRIPTIONS),
      name: 'Chamonix',
      pictures: [
        {
          src: 'https://20.objects.pages.academy/static/destinations/10.jpg',
          description: 'Geneva famous for its crowded street markets with the best street food in Asia'
        },
        {
          src: 'https://20.objects.pages.academy/static/destinations/11.jpg',
          description: 'Geneva with an embankment of a mighty river as a centre of attraction'
        }
      ]
    },
    basePrice: 1200,
    dateFrom: new Date('2019-04-16T12:00:00.375Z'),
    dateTo: new Date('2019-04-16T16:55:00.375Z'),
    isFavorite: true,
    offers: [
      {
        type: 'taxi',
        offers: [
          {
            id: 1,
            title: 'Upgrade to a business class',
            price: 70
          },
          {
            id: 2,
            title: 'Drive slowly',
            price: 191
          }
        ]
      }
    ],
  },
  {
    id: 3,
    type: 'train',
    destination: {
      id: 3,
      description: getRandomArrayElement(DESCRIPTIONS),
      name: 'Moscow',
      pictures: [
        {
          src: 'https://20.objects.pages.academy/static/destinations/23.jpg',
          description: 'Munich in a middle of Europe'
        },
        {
          src: 'https://20.objects.pages.academy/static/destinations/27.jpg',
          description: 'Munich for those who value comfort and coziness'
        }
      ]
    },
    basePrice: 1500,
    dateFrom: new Date('2019-04-17T16:28:00.375Z'),
    dateTo: new Date('2019-04-17T20:30:00.375Z'),
    isFavorite: true,
    offers: [
      {
        type: 'taxi',
        offers: [
          {
            id: 1,
            title: 'Drive slowly',
            price: 191
          },
          {
            id: 2,
            title: 'Upgrade to a business class',
            price: 70
          }
        ]
      }
    ],
  }
];

function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}
export { getRandomPoint };
