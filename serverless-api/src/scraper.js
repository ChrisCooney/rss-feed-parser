import network from './network'
import parser from 'cheerio'

const LAD_BIBLE_RSS_FEED = 'http://www.ladbible.com/news.rss'

const fetchArticleSummary = () => {
  return network.get(LAD_BIBLE_RSS_FEED)
    .then(response => response.body)
    .then(rawRss => parseArticleSummaries(rawRss))
}

const parseArticleSummaries = rawRss => {
  const $ = parser.load(rawRss, { xmlMode: true })
  const items = $('item')
  return items.map((index, item) => parseArticleSummary($, item))
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
  const imgs = article$('img').map((index, img) => getImgSrc(article$, img))
  console.log(imgs)
}

const getImgSrc = ($, img) => $(img).attr('src')

const getRawArticleContent = ($, item) => $(':contains("content")', item).text()

const handleCP1252Encoding = content => content.replace('â€‹', '')

export default {
  fetchArticleSummary,
}
