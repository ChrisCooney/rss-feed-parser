import handler from '../handler'

describe('Test the main handler functionality.', () => {
  it('should invoke the callback with the provided response', () => {
     const mockCallback = jest.fn()
     handler(null, null, mockCallback)

     const expectedShape = {
       statusCode: 200,
       body: JSON.stringify([
         {
           image: ''
         }
       ])
     }

     expect(mockCallback).toHaveBeenCalledWith(null, expectedShape)
  })
})
