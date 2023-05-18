import AbstractView from '../framework/view/abstract-view.js';
import { createPointEditTemplate } from '../template/point-edit-template.js';
import { POINT_EMPTY } from '../const.js';

export default class PointEditView extends AbstractView {

  #point = null;
  #pointDestination = null;
  #pointOffers = null;
  #handleFormSubmit = null;

  constructor({ point = POINT_EMPTY, pointDestinations, pointOffers, onFormSubmit }) {
    super();
    this.#point = point;
    this.#pointDestination = pointDestinations;
    this.#pointOffers = pointOffers;

    this.#handleFormSubmit = onFormSubmit;
    this.element.querySelector('form')
      .addEventListener('submit', this.#formSubmitHandler);

  }

  get template() {
    return createPointEditTemplate({
      point: this.#point,
      pointDestination: this.#pointDestination,
      pointOffers: this.#pointOffers
    });
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit();
  };

}
