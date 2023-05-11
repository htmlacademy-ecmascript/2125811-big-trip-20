import { getRandomArrayElement, getRandomInteger } from './utils.js';
import { DESCRIPTIONS, CITIES } from './const.js';

function generateDestination() {
  return {
    id: crypto.randomUUID(),
    description: getRandomArrayElement(DESCRIPTIONS),
    name: getRandomArrayElement(CITIES),
    pictures: [
      {
        src: `https://20.objects.pages.academy/static/destinations/${getRandomInteger(1, 30)}.jpg`,
        description: getRandomArrayElement(DESCRIPTIONS)
      }
    ]
  };

}

export { generateDestination };
