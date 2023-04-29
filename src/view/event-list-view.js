import {createElement} from '../render.js';

function createFilterTemplate() {
  return (
    '<ul class="trip-events__list"></ul>'
  );
}

export default class EventListView {
  getTemplate() {
    return createFilterTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
