import TripInfoView from './view/trip-info-view.js';
import SortView from './view/sort-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import PointsModel from './model/points-model.js';
import MockService from './service/mock-service.js';
import DestinationsModel from './model/destination-model.js';
import OffersModel from './model/offers-model.js';
import { render, RenderPosition } from './framework/render.js';
import FilterPresenter from './presenter/filter-presenter.js';

const tripMainElement = document.querySelector('.trip-main');
const tripFilltersElement = document.querySelector('.trip-controls__filters');
const mainContentElement = document.querySelector('.trip-events');

const mockService = new MockService();
const destinationsModel = new DestinationsModel(mockService);
const pointsModel = new PointsModel(mockService);
const offersModel = new OffersModel(mockService);


const boardPresenter = new BoardPresenter({
  boardContainer: mainContentElement,
  destinationsModel,
  offersModel,
  pointsModel
});

const filterPresenter = new FilterPresenter({
  filterContainer: tripFilltersElement,
  pointsModel
});


render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new SortView(), mainContentElement, RenderPosition.BEFOREEND);

boardPresenter.init();
filterPresenter.init();
