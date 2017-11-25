import network from './network'
import parser from 'cheerio'

const LAD_BIBLE_RSS_FEED = 'http://www.ladbible.com/news.rss'

const fetchArticleSummaries = () => (
  network.get(LAD_BIBLE_RSS_FEED)
    .then(response => response.text())
    .then(rawRss => parseArticleSummaries(rawRss))
)

const parseArticleSummaries = rawRss => {
  const $ = parser.load(rawRss, { xmlMode: true })
  const items = $('item')

  const summaries = []

  items.each((index, item) => {
    summaries.push(parseArticleSummary($, item))
  })

  return summaries
}

const parseArticleSummary = ($, item) => {
  return {
    title: handleCP1252Encoding($('title', item).text()).trim(),
    url: $('link', item).text(),
    images: parseImageUrls($, item)
  }
}

const parseImageUrls = ($, item) => {
  const rawArticleContent = getRawArticleContent($, item)
  const article$ = parser.load(rawArticleContent)

  const sources = []

  article$('img').each((index, img) => sources.push(getImgSrc(article$, img)))

  return sources
}

const getImgSrc = ($, img) => $(img).attr('src')

/* it thinks that content:encoded is a pseudoclass selector and goes mental.*/
const getRawArticleContent = ($, item) => $(':contains("content")', item).text()

const handleCP1252Encoding = content => content.replace('â€‹', '')

export default {
  fetchArticleSummaries,
}
