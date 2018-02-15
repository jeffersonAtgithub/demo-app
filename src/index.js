import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import {Provider} from 'react-redux'

import DemoApp from './components/app'

const mathReducer = (state = {
	inputValues: [],
	result: 0
}, action) => {
	switch(action.type){
		case "ADD": 
			state = {
				...state,
				result: state.result + action.payload,
				inputValues: [...state.inputValues, action.payload]
			}
			break
	}

	return state
	
}

const userReducer = (state = {
	age: 1,
	name: 'Jeff1'
}, action) => {
	switch(action.type){
		case "CHANGE_NAME": 
			state = {
				...state,
				name: action.payload
			}
			break
	}

	return state
	
}

const myLogger = (store) => (next) => (action) => {
	console.log("Logged Action: ", action)
	next(action)
}

const store = createStore(combineReducers({
	mathReducer, userReducer}), {}, 
	applyMiddleware(logger))

store.subscribe(()=>{
	// console.log("Store Updated", store.getState())
})


ReactDOM.render(
	<Provider store={store}>
		<DemoApp />
	</Provider>, 
	document.querySelector('.container'))

