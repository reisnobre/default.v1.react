import { SET_APPLICATION_CONN } from './types'

export function setApplicationConn (conn) {
  return {
    type: SET_APPLICATION_CONN,
    payload: conn
  }
}
