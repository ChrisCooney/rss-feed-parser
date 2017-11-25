import fetch from 'node-fetch'

const get = (url) => {
  return fetch(url)
}

export default {
  get
}
