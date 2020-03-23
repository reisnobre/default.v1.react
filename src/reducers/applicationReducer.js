import { SET_APPLICATION_CONN } from '../actions/types'

const initalState = {
  conn: 'master'
}
export default (state = initalState, action) => {
  switch (action.type) {
    case SET_APPLICATION_CONN:
      return {
        conn: action.payload
      }
    default: return state
  }
}
