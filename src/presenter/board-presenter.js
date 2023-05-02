import {render} from '../render.js';
import EventListView from '../view/event-list-view.js';
import EventItemView from '../view/event-item-view.js';
import PointEditView from '../view/point-edit-view.js';
import PointView from '../view/point-view.js';

export default class BoardPresenter {
  listComponent = new EventListView();
  itemComponent = new EventItemView();

  constructor({boardContainer, pointsModel}) {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.boardPoints = [...this.pointsModel.getPoints()];

    render(this.listComponent, this.boardContainer);
    render(this.itemComponent, this.listComponent.getElement());
    render(new PointEditView(), this.itemComponent.getElement());

    for (let i = 0; i < this.boardPoints.length; i++) {
      render(new PointView({point: this.boardPoints[i]}), this.listComponent.getElement());
    }

  }
}

