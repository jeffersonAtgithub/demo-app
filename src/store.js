import {createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import buttonReducer from './reducers/buttonReducer'
import contentReducer from './reducers/contentReducer'

export default createStore(
    combineReducers({
        buttonReducer,
        contentReducer
    }), {},
    applyMiddleware(
        thunk,
        logger
    )
)
