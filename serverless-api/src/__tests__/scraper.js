import scraper from '../scraper'
import fs from 'fs'
import path from 'path'

const mockNetworkPromise = new Promise(resolve => {
  fs.readFile(path.join(__dirname, '/resources/test-rss-sample.rss'), 'utf8', (error, data) => {
    resolve({ text: () => data })
  })
})

jest.mock('../network', () => ({
    get: () => mockNetworkPromise
}))

describe('Test the scrapers ability to parse and return content', () => {
  it('should parse and return correct objects when provided with correct rss content', () => {
    return scraper.fetchArticleSummaries().then(summaries => {
      expect(summaries.length).toBe(1)
      expect(summaries[0].title).toBe('Woman Raises Over $290,000 For Homeless Veteran Who Saved Her')
      expect(summaries[0].url).toBe('http://www.ladbible.com/community/news-inspirational-woman-raises-over-290000-for-homeless-veteran-who-saved-her-20171124')
      expect(summaries[0].images.length).toBe(2)
      expect(summaries[0].images[0]).toBe('http://20.theladbiblegroup.com/s3/content/5d8128c25a187617fc27c0adac7ea53c.jpg')
    })
  })
})
