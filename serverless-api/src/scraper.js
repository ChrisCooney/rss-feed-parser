import network from './network'
import { parseString } from 'xml2js'

const LAD_BIBLE_RSS_FEED = 'http://www.ladbible.com/news.rss'

const fetchArticleSummary = () => {
  return network.get(LAD_BIBLE_RSS_FEED)
    .then(response => response.body)
    .then(rawRss => parseArticleSummaries(rawRss))
}

const parseArticleSummaries = rawRss => (
  new Promise(resolve => {
    parseString(rawRss, (error, parsed) => {
      resolve(parsed.rss.channel[0].item.map(item => parseArticleSummary(item)))
    })
  })
)

const parseArticleSummary = item => {
  return {
    title: handleCP1252Encoding(item.title[0]).trim(),
    url: item.link[0]
  }
}

const handleCP1252Encoding = content => content.replace('â€‹', '')

export default {
  fetchArticleSummary,
}
