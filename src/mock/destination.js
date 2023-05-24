import { getRandomArrayElement, getRandomInteger } from '../utils/common.js';
import { DESCRIPTIONS, CITIES } from '../const.js';

function generateDestination() {
  return {
    id: crypto.randomUUID(),
    description: getRandomArrayElement(DESCRIPTIONS),
    name: getRandomArrayElement(CITIES),
    pictures: [
      {
        src: `https://20.objects.pages.academy/static/destinations/${getRandomInteger(1, 3)}.jpg`,
        description: getRandomArrayElement(DESCRIPTIONS)
      },
      {
        src: `https://20.objects.pages.academy/static/destinations/${getRandomInteger(4, 6)}.jpg`,
        description: getRandomArrayElement(DESCRIPTIONS)
      },
      {
        src: `https://20.objects.pages.academy/static/destinations/${getRandomInteger(7, 10)}.jpg`,
        description: getRandomArrayElement(DESCRIPTIONS)
      },
      {
        src: `https://20.objects.pages.academy/static/destinations/${getRandomInteger(11, 14)}.jpg`,
        description: getRandomArrayElement(DESCRIPTIONS)
      },
      {
        src: `https://20.objects.pages.academy/static/destinations/${getRandomInteger(15, 20)}.jpg`,
        description: getRandomArrayElement(DESCRIPTIONS)
      }
    ]
  };

}

export { generateDestination };
