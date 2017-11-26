import { combineReducers } from 'redux'

import { types } from '../actions/articles'

const articlesReducer = (
  state = {
    loading: true,
    list: [],
  },
  action,
) => {
  switch (action.type) {
    case types.loaded: {
      return {
        ...state,
        list: action.payload,
        loading: false,
      }
    }
    case types.filterUpdated: {
      return {
        ...state,
        filter: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default combineReducers({
  articles: articlesReducer,
})
