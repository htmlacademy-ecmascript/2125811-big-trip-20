function createOffersList(allOffers, offersIds) {
  //console.log(allOffers.map((el) => el.offers[0].id === offersIds[0]))

  return (/* html */`
  <div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>
    <label class="event__offer-label" for="event-offer-luggage-1">
      <span class="event__offer-title">${''}</span>
        &plus;&euro;&nbsp;
      <span class="event__offer-price">30</span>
    </label>
  </div>
  `);
}

export { createOffersList };
