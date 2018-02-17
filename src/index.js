import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import DemoApp from './containers/app'

import store from './store'

store.dispatch({
    type: 'CHANGE_ACTIVE',
    payload: 'new'
})

store.dispatch({
    type: 'SET_SEARCH',
    payload: 'test'
})

ReactDOM.render(<Provider store={store}>
    <DemoApp />
</Provider>, document.querySelector('.demo-wrapper'))