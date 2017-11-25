const types = {
  loaded: 'ARTICLES_LOADED',
}

const articlesLoaded = json => ({
  type: types.loaded,
  payload: json,
})

export {
  types,
  articlesLoaded,
}
