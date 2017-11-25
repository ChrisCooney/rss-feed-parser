import { fetchArticles } from '../../utils/api'

const mockApiResponse = [{ mock: 'response' }]

describe('api request', () => {
  it('should issue a request and returned the parsed json body', () => {
    fetch.mockResponse(JSON.stringify(mockApiResponse))

    return fetchArticles().then((response) => {
      expect(response).toEqual(mockApiResponse)
    })
  })

  it('should return undefined for a request with no body', () => {
    fetch.mockResponse('')

    return fetchArticles().then((response) => {
      expect(response).toBe(undefined)
    })
  })
})
