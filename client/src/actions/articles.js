const types = {
  loaded: 'ARTICLES_LOADED',
  filterUpdated: 'FILTER_UPDATED',
}

const articlesLoaded = json => ({
  type: types.loaded,
  payload: json,
})

const filterUpdated = filter => ({
  type: types.filterUpdated,
  payload: filter,
})

export {
  types,
  articlesLoaded,
  filterUpdated,
}
