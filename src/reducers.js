import { combineReducers } from 'redux'
import { OPEN_EMAIL, VisibilityFilters } from './actions'
const { SHOW_EMAIL } = VisibilityFilters

function email(state, action) {
  switch (action.type) {
    case OPEN_EMAIL:
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        active: true
      }
    default:
      return state
  }
}

const vuttApp = combineReducers({
  email
})

export default vuttApp
