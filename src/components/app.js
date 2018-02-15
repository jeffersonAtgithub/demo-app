import React from 'react'
import {connect} from 'react-redux'

import Main from './main'
import User from './user'

class DemoApp extends React.Component {
	constructor(){
		super()
	}

	render(){
		return(
			<div>
				<Main changeUsername={() => this.props.setName("Jeff123")} />
				<User username={this.props.user.name} />
			</div>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		user: state.userReducer,
		math: state.mathReducer 
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setName: (name) => {
			dispatch({type: "CHANGE_NAME", payload: name})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoApp)