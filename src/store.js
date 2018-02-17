import {createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import buttonFilterReducer from './reducers/buttonFilterReducer'
import searchReducer from './reducers/searchReducer'
import videoReducer from './reducers/videoReducer'

export default createStore(
    combineReducers({
        buttonFilterReducer,
        searchReducer,
        videoReducer
    }), {},
    applyMiddleware(
        logger
    )
)
