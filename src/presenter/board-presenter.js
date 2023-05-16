import EventListView from '../view/event-list-view.js';
import EventItemView from '../view/event-item-view.js';
import PointEditView from '../view/point-edit-view.js';
import PointView from '../view/point-view.js';
import { render } from '../framework/render.js';

export default class BoardPresenter {

  #listComponent = new EventListView();
  #itemComponent = new EventItemView();

  #boardContainer = null;
  #destinationsModel = null;
  #offersModel = null;
  #pointsModel = null;
  #boardPoints = null;


  constructor({ boardContainer, destinationsModel, offersModel, pointsModel }) {
    this.#boardContainer = boardContainer;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#boardPoints = [...this.#pointsModel.points];

    render(this.#listComponent, this.#boardContainer);
    render(this.#itemComponent, this.#listComponent.element);

    render(
      new PointEditView({
        point: this.#boardPoints[0],
        pointDestinations: this.#destinationsModel.destinations,
        pointOffers: this.#offersModel.offers
      }),
      this.#listComponent.element
    );

    this.#boardPoints.forEach((point) => {
      render(
        new PointView({
          point,
          pointDestination: this.#destinationsModel.getById(point.destination),
          pointOffers: this.#offersModel.getByType(point.type)
        }),
        this.#listComponent.element
      );
    });
  }
}

