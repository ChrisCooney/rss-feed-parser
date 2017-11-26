import { createSelector } from 'reselect'

const selectLoading = state => state.articles.loading
const selectFilter = state => state.articles.filter
const selectError = state => state.articles.error
const selectArticlesList = state => state.articles.list

const contains = (haystack, needle) => haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1

const selectArticles = createSelector(
  selectArticlesList,
  selectFilter,
  (articles, filter) =>
    filter ? articles.filter(article => contains(article.title, filter)) : articles,
)

export {
  selectArticles,
  selectLoading,
  selectFilter,
  selectError,
}
