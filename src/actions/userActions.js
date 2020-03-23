import { SET_USER, DELETE_USER } from '../actions/types'

export function setUser (user) {
  return {
    type: SET_USER,
    payload: user
  }
}

export function deleteUser () {
  return {
    type: DELETE_USER
  }
}
