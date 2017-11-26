import scraper from './scraper'

const HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Origin': '*',
}

export const images = (event, context, callback) => (
  scraper.fetchArticleSummaries()
    .then(summaries => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(summaries),
        headers: HEADERS,
      })
    })
    .catch(() => {
      callback(null, {
        statusCode: 500,
        headers: HEADERS,
      })
    })
)
