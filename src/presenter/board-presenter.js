import {render} from '../render.js';
import EventListView from '../view/event-list-view.js';
import EventItemView from '../view/event-item-view.js';
import PointEditView from '../view/point-edit-view.js';
import PointView from '../view/point-view.js';

export default class BoardPresenter {
  listComponent = new EventListView();
  itemComponent = new EventItemView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.listComponent, this.boardContainer);
    render(this.itemComponent, this.listComponent.getElement());
    render(new PointEditView(), this.itemComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.listComponent.getElement());
    }

  }
}
//создаю пресентер
