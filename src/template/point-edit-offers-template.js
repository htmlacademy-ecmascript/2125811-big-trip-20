function createOffersList(point, pointOffers, { type }) {
  return (
    pointOffers.find((el) => el.type === type).offers.map((offer, index) => /* html */
      `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden"
      id="event-offer-luggage-${index}" type="checkbox"
      name="event-offer-luggage"
      ${point.offers.find((id) => id === offer.id) === offer.id ? 'checked' : ''}
      >
      <label class="event__offer-label" for="event-offer-luggage-${index}">
        <span class="event__offer-title">${offer.title}</span>
          &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </label>
    </div>`
    )
  ).join(' ');

}

export { createOffersList };
