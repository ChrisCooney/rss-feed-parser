import network from '../network'

jest.mock('got', () => (
  () => {
    const promise = new Promise((resolve) => {
      resolve({
        body: 'hello!'
      })
    })
    return promise
  }
))

describe('Test the ability of the network utility to issue requests', () => {
  it('should return the content sent back to it from the network utility it uses when sending a get request', () => {
    return network.get('something').then(response => expect(response.body).toBe('hello!'))
  })
})
