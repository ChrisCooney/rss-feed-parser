import scraper from './scraper'

export const images = (event, context, callback) => (
  scraper.fetchArticleSummaries()
    .then(summaries => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(summaries),
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      })
    })
)
