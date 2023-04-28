import {render} from './render.js';
import TripInfo from './view/trip-info-view.js';

const tripMainElement = document.querySelector('.trip-main');


render(new TripInfo(), tripMainElement);
