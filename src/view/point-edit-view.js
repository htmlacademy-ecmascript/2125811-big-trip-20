import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { createPointEditTemplate } from '../template/point-edit-template.js';
import { POINT_EMPTY } from '../const.js';

export default class PointEditView extends AbstractStatefulView {

  #pointDestination = null;
  #pointOffers = null;
  #handleFormSubmit = null;
  #handleCloseForm = null;

  constructor({ point = POINT_EMPTY, pointDestinations, pointOffers, onFormSubmit, onResetClick }) {
    super();

    this.#pointDestination = pointDestinations;
    this.#pointOffers = pointOffers;

    this._setState(PointEditView.parsePointToState({ point }));

    this.#handleFormSubmit = onFormSubmit;
    this.#handleCloseForm = onResetClick;

    this.element.querySelector('form')
      .addEventListener('submit', this.#formSubmitHandler);

    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#closeHandlerForm);
  }

  get template() {
    return createPointEditTemplate({
      state: this._state,
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

  static parsePointToState = ({ point }) => ({ point });

  static parseStateToPoint = ({ state }) => state.point;

}
