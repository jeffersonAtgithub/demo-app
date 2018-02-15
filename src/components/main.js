import React from 'react'

const Main = (props) => {
	return (
		<button onClick={() => props.changeUsername()}>Change Username</button>
	)
}

export default Main