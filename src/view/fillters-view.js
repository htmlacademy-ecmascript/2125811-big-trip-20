import AbstractView from '../framework/view/abstract-view.js';
import { createFilterTemplate } from '../template/point-fillters-template.js';

export default class FilterView extends AbstractView {

  #filters = [];

  constructor(filters) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createFilterTemplate(this.#filters);
  }
}
