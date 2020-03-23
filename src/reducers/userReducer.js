import { SET_AUTHENTICATION_TOKEN, DELETE_AUTHENTICATION_TOKEN } from '../actions/types'

const initalState = {
  user: {}
}
export default (state = initalState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATION_TOKEN:
      return {
        user: action.payload
      }
    case DELETE_AUTHENTICATION_TOKEN:
      return initalState
    default: return state
  }
}
