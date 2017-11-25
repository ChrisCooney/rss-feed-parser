import { types, articlesLoaded } from '../../actions/articles'

const mockJson = {
  hello: 'world',
}

describe('Test actions correct wrap up content', () => {
  it('should wrap up the articles json in a standard redux object', () => {
    const action = articlesLoaded(mockJson)
    expect(action.type).toBe(types.loaded)
    expect(action.payload).toEqual(mockJson)
  })
})
