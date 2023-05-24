import { generateFilters } from '../mock/filter.js';
import { render } from '../framework/render.js';
import FilterView from '../view/fillters-view.js';

export default class FilterPresenter {

  #pointsModel = null;
  #filterContainer = null;
  #filters = [];

  constructor({ filterContainer, pointsModel }) {
    this.#filterContainer = filterContainer;
    this.#pointsModel = pointsModel;

    this.#filters = generateFilters(this.#pointsModel.points);
  }

  init() {
    render(new FilterView(this.#filters), this.#filterContainer);
  }
}
