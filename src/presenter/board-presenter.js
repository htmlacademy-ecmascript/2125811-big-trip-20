import {render} from '../render.js';
import EventListView from '../view/event-list-view.js';
import EventItemView from '../view/event-item-view.js';
import PointEditView from '../view/point-edit-view.js';
import PointView from '../view/point-view.js';

export default class BoardPresenter {
  listComponent = new EventListView();
  itemComponent = new EventItemView();

  constructor({boardContainer, destinationsModel, offersModel, pointsModel}) {
    this.boardContainer = boardContainer;
    this.destinationsModel = destinationsModel;
    this.offersModel = offersModel;
    this.pointsModel = pointsModel;
  }

  init() {
    this.boardPoints = [...this.pointsModel.get()];

    render(this.listComponent, this.boardContainer);
    render(this.itemComponent, this.listComponent.getElement());

    render(
      new PointEditView({
        point: this.boardPoints[0],
        pointDestinations: this.destinationsModel.get(),
        pointOffers: this.offersModel.get()
      }),
      this.listComponent.getElement()
    );

    this.boardPoints.forEach((point) => {
      render(
        new PointView({
          point,
          pointDestination: this.destinationsModel.getById(point.destination),
          pointOffers: this.offersModel.getByType(point.type)
        }),
        this.listComponent.getElement()
      );
    });
  }
}

