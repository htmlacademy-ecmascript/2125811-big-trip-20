import AbstractView from '../framework/view/abstract-view.js';
import { createPointEditTemplate } from '../template/point-edit-template.js';
import { POINT_EMPTY } from '../const.js';

export default class PointEditView extends AbstractView {

  #point = null;
  #pointDestination = null;
  #pointOffers = null;
  #handleFormSubmit = null;
  #handleCloseForm = null;

  constructor({ point = POINT_EMPTY, pointDestinations, pointOffers, onFormSubmit, onResetClick }) {
    super();
    this.#point = point;
    this.#pointDestination = pointDestinations;
    this.#pointOffers = pointOffers;

    this.#handleFormSubmit = onFormSubmit;
    this.#handleCloseForm = onResetClick;

    this.element.querySelector('form')
      .addEventListener('submit', this.#formSubmitHandler);

    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#closeHandlerForm);
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

  #closeHandlerForm = (evt) => {
    evt.preventDefault();
    this.#handleCloseForm();
  };

}
