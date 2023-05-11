function createOffersList(allOffers) {

  const offers = allOffers.find((el) => el.offers).offers.find((item) => item.id);
  if (offers) {
    return (/* html */`
    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>
      <label class="event__offer-label" for="event-offer-luggage-1">
        <span class="event__offer-title">${offers.title}</span>
          &plus;&euro;&nbsp;
        <span class="event__offer-price">${offers.price}</span>
      </label>
    </div>
    `);
  } else {
    return '';
  }


}

export { createOffersList };
