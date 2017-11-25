import { images } from '../handler'

const mockArticleSummaries = [{
  title: 'title',
  url: 'url',
  images: []
}]

const mockHttpResponse = {
  statusCode: 200,
  body: JSON.stringify(mockArticleSummaries)
}

jest.mock('../scraper', () => ({
  fetchArticleSummaries: jest.fn(() => (
    new Promise((resolve) => {
      resolve(mockArticleSummaries)
    })
  ))
}))

describe('Test the main handler functionality.', () => {
  it('should invoke the callback with the provided response', () => {
     const mockCallback = jest.fn()

     return images(null, null, mockCallback).then(() => {
       expect(mockCallback).toHaveBeenCalledWith(null, mockHttpResponse)
     })
  })
})
