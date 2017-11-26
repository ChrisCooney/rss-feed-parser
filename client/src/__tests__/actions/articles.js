import { types, articlesLoaded, filterUpdated, error } from '../../actions/articles'

const mockJson = {
  hello: 'world',
}

describe('Test actions correct wrap up content', () => {
  it('should wrap up the articles json in a standard redux object', () => {
    const action = articlesLoaded(mockJson)
    expect(action.type).toBe(types.loaded)
    expect(action.payload).toEqual(mockJson)
  })

  it('should wrap up the filter in a standard redux action object', () => {
    const action = filterUpdated('hello')
    expect(action.type).toBe(types.filterUpdated)
    expect(action.payload).toBe('hello')
  })

  it('should create a redux action object for the error', () => {
    const action = error()
    expect(action.type).toBe(types.error)
  })
})
