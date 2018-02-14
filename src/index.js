import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class DemoApp extends Component{
	render(){
		return(
			<div>This App is for Demo.</div>
		)
	}
}

ReactDOM.render(<DemoApp />, document.querySelector('.container'))
