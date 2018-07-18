import { createStore, combineReducers, applyMiddleware } from 'redux'
import activitiesReducer from './reducer/activitiesReducer'
import messageReducer from './reducer/messageReducer'
import calendarReducer from './reducer/calendarReducer'
import childReducer from './reducer/childReducer'
import authReducer from './reducer/authReducer'
import providerReducer from './reducer/providerReducer'
import testimonialReducer from './reducer/testimonialReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

let rootReducer = combineReducers({
  activitiesReducer,
  messageReducer,
  authReducer,
  calendarReducer,
  childReducer,
  testimonialReducer,
  providerReducer

})

export default () => createStore(rootReducer, applyMiddleware(thunk, logger))
