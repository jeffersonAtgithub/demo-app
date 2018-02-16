import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import {Provider} from 'react-redux'
import DemoApp from './components/app'

const buttonsState = {
	buttons: {
		'new': 'btn-search',
		'favorites': 'btn-search',
		'watch later': 'btn-search'
	},
	activefilter: 'new'
}
const buttonFilterReducer = (state = buttonsState, action) => {
	if(action.type == 'CHANGE_ACTIVE'){
		state = {
			buttons: {
				...buttonsState.buttons,
				[action.payload]: 'btn-search active'
			},
			activefilter: action.payload
		}
	}

	return state
}

const searchState = {
	currentsearch: ''
}
const searchReducer = (state = searchState, action) => {
	if(action.type == 'CHANGE_SEARCH'){
		state = {
			currentsearch: action.payload
		}
	}

	return state
} 

let store = createStore(combineReducers({buttonFilterReducer, searchReducer}))

store.subscribe(() => {
	console.log('Store Changed!', store.getState())
})

store.dispatch({
	type: 'CHANGE_ACTIVE',
	payload: 'new'
})

ReactDOM.render(<Provider store={store}>
					<DemoApp />
				</Provider>, document.querySelector('.container'))