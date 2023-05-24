function createFilterItem({ type, hasPoints }) {
  return (/* html */`
    <div class="trip-filters__filter" >
        <input
          id="filter-${type}"
          class="trip-filters__filter-input  visually-hidden"
          type="radio"
          name="trip-filter"
          value="${type}"
          ${(hasPoints) ? '' : 'disable'}>
        <label
          class="trip-filters__filter-label"
          for="filter-${type}">
          ${type}
          </label>
    </div>`
  );
}


function createFilterTemplate(filters) {


  return (/* html */`
    <form class="trip-filters" action = "#" method = "get">
      ${filters.map(createFilterItem).join('')}
      <button  class="visually-hidden"  type="submit">Accept filter</button>
    </form >
    `);
}

export { createFilterTemplate };
