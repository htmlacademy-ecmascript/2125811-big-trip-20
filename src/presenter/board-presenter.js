import EventListView from '../view/event-list-view.js';
import { render, RenderPosition } from '../framework/render.js';
import NoPointView from '../view/no-point-view.js';
import SortView from '../view/sort-view.js';
import PointPresenter from './point-presenter.js';

export default class BoardPresenter {

  #listComponent = new EventListView();
  #boardContainer = null;
  #destinationsModel = null;
  #offersModel = null;
  #pointsModel = null;
  #boardPoints = [];
  #sortComponent = new SortView();
  #noTaskComponent = new NoPointView();


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
      pointListContainer: this.#listComponent.element
    });

    pointPresenter.init({
      point,
      destinationsModel: this.#destinationsModel,
      offersModel: this.#offersModel
    });
  }

  #renderSort() {
    render(this.#sortComponent, this.#boardContainer, RenderPosition.AFTERBEGIN);
  }

  #renderNoTasks() {
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
      this.#renderNoTasks();
      return;
    }

    this.#renderSort();
    this.#renderPoints();
  }

}
