import { selectArticles, selectLoading, selectFilter, selectError } from '../../selectors/articles'

const mockState = {
  articles: {
    list: [{
      title: 'something',
    }],
    loading: false,
    filter: 'hello',
    error: true,
  },
}

describe('selectArticles', () => {
  it('should return the articles from the mock state passed in', () => {
    mockState.articles.filter = 'some'
    const articles = selectArticles(mockState)
    expect(articles).toEqual(mockState.articles.list)
  })
})

describe('selectLoading', () => {
  it('should return the loading state from the mock state passed in', () => {
    const loading = selectLoading(mockState)
    expect(loading).toBe(false)
  })
})

describe('selectFilter', () => {
  it('should return the filter state from the mock state passed in', () => {
    mockState.articles.filter = 'hello'
    const filter = selectFilter(mockState)
    expect(filter).toBe('hello')
  })
})

describe('selectError', () => {
  it('should return the error boolean from the mock state passed in', () => {
    const error = selectError(mockState)
    expect(error).toBe(true)
  })
})
