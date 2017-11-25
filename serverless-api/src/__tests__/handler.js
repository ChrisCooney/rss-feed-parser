import { images } from '../handler'

let mockShouldThrowError = false

const mockArticleSummaries = [{
  title: 'title',
  url: 'url',
  images: []
}]

const mockHttpResponse = {
  statusCode: 200,
  body: JSON.stringify(mockArticleSummaries),
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
}

const expectedErrorResponse = {
  statusCode: 500,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
}

jest.mock('../scraper', () => ({
  fetchArticleSummaries: jest.fn(() => {
    return new Promise((resolve) => {
      if(mockShouldThrowError) {
        throw new Error('Something has gone wrong')
      }
      resolve(mockArticleSummaries)
    })
  })
}))

describe('Test the main handler functionality.', () => {
  it('should invoke the callback with the provided response', () => {
     const mockCallback = jest.fn()

     return images(null, null, mockCallback).then(() => {
       expect(mockCallback).toHaveBeenCalledWith(null, mockHttpResponse)
     })
  })

  it('should respond with a 500 when an error occurs', () => {
    const mockCallback = jest.fn()
    mockShouldThrowError = true

    return images(null, null, mockCallback).then(() => {
      expect(mockCallback).toHaveBeenCalledWith(null, expectedErrorResponse)
    })
  })
})
