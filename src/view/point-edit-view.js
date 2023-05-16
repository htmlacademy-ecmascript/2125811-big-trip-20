import AbstractView from '../framework/view/abstract-view.js';
import { createPointEditTemplate } from '../template/point-edit-template.js';
import { POINT_EMPTY } from '../const.js';

export default class PointEditView extends AbstractView {

  #point = null;
  #pointDestination = null;
  #pointOffers = null;

  constructor({ point = POINT_EMPTY, pointDestinations, pointOffers }) {
    super();
    this.#point = point;
    this.#pointDestination = pointDestinations;
    this.#pointOffers = pointOffers;
  }

  get template() {
    return createPointEditTemplate({
      point: this.#point,
      pointDestination: this.#pointDestination,
      pointOffers: this.#pointOffers
    });
  }

}
