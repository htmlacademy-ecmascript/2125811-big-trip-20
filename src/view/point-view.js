import AbstractView from '../framework/view/abstract-view.js';
import { createPointTemplate } from '../template/point-template.js';
export default class PointView extends AbstractView {

  #point = null;
  #pointDestination = null;
  #pointOffers = null;
  #handEditClick = null;

  constructor({ point, pointDestination, pointOffers, onEditClick }) {
    super();
    this.#point = point;
    this.#pointDestination = pointDestination;
    this.#pointOffers = pointOffers;

    this.#handEditClick = onEditClick;
    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#editClickHandler);
  }

  get template() {
    return createPointTemplate({
      point: this.#point,
      pointDestination: this.#pointDestination,
      pointOffers: this.#pointOffers
    });
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handEditClick();
  };

}
