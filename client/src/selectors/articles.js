const selectArticles = state => state.articles.list
const selectLoading = state => state.articles.loading
const selectFilter = state => state.articles.filter

export {
  selectArticles,
  selectLoading,
  selectFilter,
}
