import {createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import buttonFilterReducer from './reducers/buttonFilterReducer'
import contentReducer from './reducers/contentReducer'

export default createStore(
    combineReducers({
        buttonFilterReducer,
        contentReducer
    }), {},
    applyMiddleware(
        logger
    )
)
