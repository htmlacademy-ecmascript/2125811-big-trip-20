import {render, RenderPosition} from './render.js';
import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/fillters-view.js';
import SortView from './view/sort-view.js';
import BoardPresenter from './presenter/board-presenter.js';

const tripMainElement = document.querySelector('.trip-main');
const tripFilltersElement = document.querySelector('.trip-controls__filters');
const mainContentElement = document.querySelector('.trip-events');
const boardPresenter = new BoardPresenter({boardContainer: mainContentElement});

render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), tripFilltersElement, RenderPosition.AFTERBEGIN);
render(new SortView(), mainContentElement, RenderPosition.BEFOREEND);

boardPresenter.init();
