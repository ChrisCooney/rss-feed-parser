import scraper from '../scraper'
import fs from 'fs'

describe('Test the scrapers ability to parse and return content', () => {

  const validRssHtml = fs.readFileSync('./resources/test-rss-sample.rss')

  it('should parse and return correct objects when provided with correct html', () => {
    /*
      Need to be able to mock out the thing this is requesting.
    */
  })
})
