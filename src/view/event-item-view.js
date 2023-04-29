import {createElement} from '../render.js';

function createFilterTemplate() {
  return (
    '<li class="trip-events__item"></li>'
  );
}

export default class EventItemView {
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
