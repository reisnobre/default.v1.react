import { combineReducers } from 'redux'

import applicationReducer from './applicationReducer'
import authenticationReducer from './authenticationReducer'
import userReducer from './userReducer'

const reducers = combineReducers({
  applicationReducer,
  authenticationReducer,
  userReducer
})

export default reducers
