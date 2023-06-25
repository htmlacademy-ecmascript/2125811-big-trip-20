import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { createPointEditTemplate } from '../template/point-edit-template.js';
import { POINT_EMPTY } from '../const.js';

export default class PointEditView extends AbstractStatefulView {

  #pointDestinations = null;
  #pointOffers = null;
  #onSubmitClick = null;
  #onResetClick = null;

  constructor({ point = POINT_EMPTY, pointDestinations, pointOffers, onFormSubmit, onResetClick }) {
    super();

    this.#pointDestinations = pointDestinations;
    this.#pointOffers = pointOffers;

    this._setState(PointEditView.parsePointToState({ point }));

    this.#onSubmitClick = onFormSubmit;
    this.#onResetClick = onResetClick;

    this._restoreHandlers();
  }

  reset = (point) => this.updateElement({ point });

  _restoreHandlers() {
    this.element.querySelector('form')
      .addEventListener('submit', this.#formSubmitHandler);

    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#resetButtonClickHandler);

    this.element.querySelector('.event__type-group')
      .addEventListener('change', this.#typeInputClick);

    this.element.querySelector('.event__input--destination')
      .addEventListener('change', this.#distinationInputChange);

    const offerBlock = this.element.querySelector('.event__available-offers');

    if (offerBlock) {
      offerBlock.addEventListener('change', this.#offerClickHandler);
    }

    this.element.querySelector('.event__input--price')
      .addEventListener('change', this.#priceInputChange);
  }

  get template() {
    return createPointEditTemplate({
      state: this._state,
      pointDestination: this.#pointDestinations,
      pointOffers: this.#pointOffers
    });
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#onSubmitClick(PointEditView.parseStateToPoint(this._state));
  };

  #resetButtonClickHandler = (evt) => {
    evt.preventDefault();
    this.#onResetClick();
  };

  #typeInputClick = (evt) => {
    evt.preventDefault();

    this.updateElement({
      point: {
        ...this._state.point,
        type: evt.target.value,
        offers: []
      }
    });
  };

  #distinationInputChange = (evt) => {
    evt.preventDefault();

    const selectedDestination = this.#pointDestinations
      .find((pointDestination) => pointDestination.name === evt.target.value);

    const selectedDestinationId = (selectedDestination)
      ? selectedDestination.id
      : null;

    this.updateElement({
      point: {
        ...this._state.point,
        destination: selectedDestinationId
      }
    });
  };

  #offerClickHandler = (evt) => {
    evt.preventDefault();

    const checkedBoxes = Array.from(this.element.querySelectorAll('.event__offer-checkbox:checked'));

    this._setState({
      point: {
        ...this._state.point,
        offers: checkedBoxes.map((element) => element.dataset.offerId)
      }
    });
  };

  #priceInputChange = (evt) => {
    evt.preventDefault();

    this._setState({
      point: {
        ...this._state.point,
        basePrice: evt.target.value
      }
    });
  };

  static parsePointToState = ({ point }) => ({ point });

  static parseStateToPoint = (state) => state.point;

}
