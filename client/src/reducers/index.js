import { combineReducers } from 'redux'

const imageReducer = (state = {}, action) => {
  switch(action.type) {
    case 'IMAGES_LOADED': {
      return state = {
        ...state,
        images: action.payload
      }
    }
    case 'FILTER_LOADED': {
      return state = {
        ...state,
        filter: action.payload
      }
    }
  }

  return state
}

export default combineReducers({
  images: imageReducer,
})
