import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import SearchContainer from './containers/searchContainer'

import store from './store'

ReactDOM.render(<Provider store={store}>
    <SearchContainer />
</Provider>, document.querySelector('.demo-wrapper'))