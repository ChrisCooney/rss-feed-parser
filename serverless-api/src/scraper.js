import network from './network'
import { parseString } from 'xml2js'

const LAD_BIBLE_RSS_FEED = 'http://www.ladbible.com/news.rss'

const fetchArticleSummary = () => {
  return network.get(LAD_BIBLE_RSS_FEED)
    .then(response => response.body)
    .then(rawRss => parseItems(rawRss))
}

const parseItems = rawRss => (
  new Promise((resolve) => {
    parseString(rawRss, (error, parsed) => {
      resolve(parsed.rss.channel[0].item.map(item => parseItem(item)))
    })
  })
)

const parseItem = item => {
  return {
    title: handleCP1252Encoding(item.title[0]).trim()
  }
}

const handleCP1252Encoding = content => content.replace('â€‹', '')

export default {
  fetchArticleSummary,
}
