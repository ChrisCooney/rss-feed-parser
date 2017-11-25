import { selectArticles, selectLoading } from '../../selectors/articles'

const mockState = {
  articles: {
    list: [{ hello: 'world' }],
    loading: false,
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
