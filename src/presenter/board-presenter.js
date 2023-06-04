import EventListView from '../view/event-list-view.js';
import { render, RenderPosition } from '../framework/render.js';
import NoPointView from '../view/no-point-view.js';
import SortView from '../view/sort-view.js';
import PointPresenter from './point-presenter.js';
import { updateItem } from '../utils/common.js';

export default class BoardPresenter {

  #listComponent = new EventListView();
  #boardContainer = null;
  #destinationsModel = null;
  #offersModel = null;
  #pointsModel = null;
  #boardPoints = [];
  #sortComponent = new SortView();
  #noTaskComponent = new NoPointView();
  #pointPresenters = new Map();


  constructor({ boardContainer, destinationsModel, offersModel, pointsModel }) {
    this.#boardContainer = boardContainer;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#boardPoints = [...this.#pointsModel.points];

    this.#renderBoard();
  }

  #renderPoint(point) {

    const pointPresenter = new PointPresenter({
      pointListContainer: this.#listComponent.element,
      destinationsModel: this.#destinationsModel,
      offersModel: this.#offersModel,
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handleModeChange
    });

    pointPresenter.init(point);

    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };


  #handlePointChange = (updatedPoint) => {
    this.#boardPoints = updateItem(this.#boardPoints, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };


  #clearPointList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }


  #renderSort() {
    render(this.#sortComponent, this.#boardContainer, RenderPosition.AFTERBEGIN);
  }

  #renderNoPoints() {
    render(this.#noTaskComponent, this.#boardContainer, RenderPosition.AFTERBEGIN);
  }

  #renderPoints() {
    this.#boardPoints.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #renderBoard() {
    render(this.#listComponent, this.#boardContainer);

    if (this.#boardPoints.every((point) => point === null)) {
      this.#renderNoPoints();
      return;
    }

    this.#renderSort();
    this.#renderPoints();
  }

}
