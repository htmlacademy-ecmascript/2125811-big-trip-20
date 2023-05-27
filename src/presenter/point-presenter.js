import PointEditView from '../view/point-edit-view.js';
import PointView from '../view/point-view.js';
import { render, replace, remove } from '../framework/render.js';

export default class PointPresenter {

  #pointListContainer = null;
  #destinationsModel = null;
  #offersModel = null;
  #pointComponent = null;
  #pointEditComponent = null;
  #point = null;

  constructor({ pointListContainer }) {
    this.#pointListContainer = pointListContainer;
  }

  init({ point, destinationsModel, offersModel }) {
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#point = point;
    const prevPointComponent = this.#pointComponent;
    const prevPointEditComponent = this.#pointEditComponent;


    this.#pointComponent = new PointView({
      point: this.#point,
      pointDestination: this.#destinationsModel.getById(this.#point.destination),
      pointOffers: this.#offersModel.getByType(this.#point.type),
      onEditClick: this.#handleEditClick
    });

    this.#pointEditComponent = new PointEditView({
      point: this.#point,
      pointDestinations: this.#destinationsModel.destinations,
      pointOffers: this.#offersModel.offers,
      onFormSubmit: this.#handleFormSubmit,
      onResetClick: this.#handleFormSubmit
    });
    if (prevPointComponent === null || prevPointEditComponent === null) {
      render(this.#pointComponent, this.#pointListContainer);
      return;
    }

    if (this.#pointListContainer.contains(prevPointComponent.element)) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#pointListContainer.contains(prevPointEditComponent.element)) {
      replace(this.#pointEditComponent, prevPointEditComponent);
    }

    remove(prevPointComponent);
    remove(prevPointEditComponent);

  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#pointEditComponent);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToCard();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #replaceCardToForm() {
    replace(this.#pointEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  #replaceFormToCard() {
    replace(this.#pointComponent, this.#pointEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #handleEditClick = () => {
    this.#replaceCardToForm();
  };

  #handleFormSubmit = () => {
    this.#replaceFormToCard();
  };
}
