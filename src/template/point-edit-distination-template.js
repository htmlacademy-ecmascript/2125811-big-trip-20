function createDistinationsList(pointDestination, { destination }) {
  return (/* html */
    `<section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${pointDestination.find((elem) => elem.id === destination).description}.</p>

          <div class="event__photos-container">
            <div class="event__photos-tape">
              <img class="event__photo" src="${pointDestination.find((elem) => elem.id === destination).pictures[0].src}" alt="Event photo">
              <img class="event__photo" src="${pointDestination.find((elem) => elem.id === destination).pictures[1].src}" alt="Event photo">
              <img class="event__photo" src="${pointDestination.find((elem) => elem.id === destination).pictures[2].src}" alt="Event photo">
              <img class="event__photo" src="${pointDestination.find((elem) => elem.id === destination).pictures[3].src}" alt="Event photo">
              <img class="event__photo" src="${pointDestination.find((elem) => elem.id === destination).pictures[4].src}" alt="Event photo">
            </div>
          </div>
        </section>`

  );
}

export { createDistinationsList };
