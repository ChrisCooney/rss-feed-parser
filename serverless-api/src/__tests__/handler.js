import handler from '../handler'

describe('Test the main handler functionality.', () => {
  it('should invoke the callback with the provided response', () => {
     const mockCallback = jest.fn()
     handler(null, null, mockCallback)

     expect(mockCallback).toHaveBeenCalled()
  })
})
