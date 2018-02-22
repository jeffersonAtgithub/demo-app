import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import DemoApp from './containers/demoApp'

import store from './store'

ReactDOM.render(<Provider store={store}>
    <DemoApp />
</Provider>, document.querySelector('.demo-wrapper'))