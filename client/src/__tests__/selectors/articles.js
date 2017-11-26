import { selectArticles, selectLoading, selectFilter } from '../../selectors/articles'

const mockState = {
  articles: {
    list: [{ hello: 'world' }],
    loading: false,
    filter: 'hello',
  },
}

describe('selectArticles', () => {
  it('should return the articles from the mock state passed in', () => {
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
    const filter = selectFilter(mockState)
    expect(filter).toBe('hello')
  })
})
