import scraper from './scraper'

const images = (event, context, callback) => (
  scraper.fetchArticleSummaries()
    .then(summaries => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(summaries)
      })
    })
)

export default images
