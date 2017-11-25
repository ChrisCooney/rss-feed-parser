import { API_ENDPOINT } from '../constants'

const parseJson = response => (
   response.text().then(text => (
       text ? JSON.parse(text) : undefined
   ),
))

const fetchArticles = () => (
  fetch(API_ENDPOINT)
    .then(parseJson)
)

export {
  fetchArticles,
}
