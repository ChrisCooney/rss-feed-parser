import { combineReducers } from 'redux'

const imageReducer = (state = {}, action) => {
  switch (action.type) {
    case 'IMAGES_LOADED': {
      return {
        ...state,
        images: action.payload,
      }
    }
    case 'FILTER_LOADED': {
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
  images: imageReducer,
})
