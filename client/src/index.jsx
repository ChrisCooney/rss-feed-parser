require('../styles/application.scss')

// Fetch polyfill for cross browser support.
import 'whatwg-fetch'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import Client from './Client.jsx'

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <Client />
  </Provider>,
  document.getElementById('react-root')
)
