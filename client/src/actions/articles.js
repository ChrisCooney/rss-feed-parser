const types = {
  loaded: 'ARTICLES_LOADED',
  filterUpdated: 'FILTER_UPDATED',
  error: 'ERROR',
}

const articlesLoaded = json => ({
  type: types.loaded,
  payload: json,
})

const filterUpdated = filter => ({
  type: types.filterUpdated,
  payload: filter,
})

const error = () => ({
  type: types.error,
  payload: true,
})

export {
  types,
  articlesLoaded,
  filterUpdated,
  error,
}
