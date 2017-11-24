import network from './network'

const LAD_BIBLE_RSS_FEED = 'http://www.ladbible.com/news.rss'

const fetchArticleSummary = () => (
  network.get(LAD_BIBLE_RSS_FEED).then(() => {
    return [1]
  })
)

export default {
  fetchArticleSummary,
}
