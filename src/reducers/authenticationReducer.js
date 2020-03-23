import { SET_AUTHENTICATION_TOKEN, DELETE_AUTHENTICATION_TOKEN } from '../actions/types'

const initalState = {
  token: {}
}
export default (state = initalState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATION_TOKEN:
      return {
        tokens: action.payload
      }
    case DELETE_AUTHENTICATION_TOKEN:
      return initalState
    default: return state
  }
}
