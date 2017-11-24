import scraper from '../scraper'
import fs from 'fs'

const mockRssHtml = fs.readFileSync(__dirname + '/resources/test-rss-sample.rss')

jest.mock('../network', () => (
  {
    get: () => (
      new Promise((resolve) => resolve({ body: mockRssHtml }))
    )
  }
))

describe('Test the scrapers ability to parse and return content', () => {
  it('should parse and return correct objects when provided with correct html', () => {
    return scraper.fetchArticleSummary().then((summaries) => {
      expect(summaries.length).toBe(1)
    })
  })
})
