import { SET_AUTHENTICATION_TOKEN, DELETE_AUTHENTICATION_TOKEN } from '../actions/types'
import axios from 'axios'

const initalState = {
  tokens: {}
}
export default (state = initalState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATION_TOKEN:
      window.localStorage.setItem('authTokens', JSON.stringify(action.payload))
      // axios.defaults.headers.common.Authorization = `Bearer ${action.payload}`
      return {
        tokens: action.payload
      }
    case DELETE_AUTHENTICATION_TOKEN:
      // window.localStorage.removeItem('authTokens')
      delete axios.defaults.headers.common.Authorization

      return initalState
    default: return state
  }
}
