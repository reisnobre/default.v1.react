import { SET_AUTHENTICATION_TOKEN, DELETE_AUTHENTICATION_TOKEN } from '../actions/types'

export function setAuthenticationToken (tokens) {
  return {
    type: SET_AUTHENTICATION_TOKEN,
    payload: tokens
  }
}

export function deleteAuthenticationToken () {
  return {
    type: DELETE_AUTHENTICATION_TOKEN
  }
}
