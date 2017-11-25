import { selectArticles } from '../../selectors/articles'

const mockState = {
  articles: [{ hello: 'world' }],
}

describe('selectArticles', () => {
  it('should return the articles from the mock state passed in', () => {
    const articles = selectArticles(mockState)
    expect(articles).toEqual(mockState.articles)
  })
})
