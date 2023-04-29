import {render} from './render.js';
import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/fillters-view.js';
import SortView from './view/sort-view.js';
import {RenderPosition} from './render.js';

const tripMainElement = document.querySelector('.trip-main');
const tripFilltersElement = document.querySelector('.trip-controls__filters');
const tripSortElement = document.querySelector('.trip-events');

render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), tripFilltersElement, RenderPosition.AFTERBEGIN);
render(new SortView(), tripSortElement, RenderPosition.BEFOREEND);
