import React from 'react'

const SearchFilterButton = (props) => {
	return(
		<a className={props.classes} onClick={()=>props.setButtonActive(props.buttontext)}>{props.buttontext.toUpperCase()}</a>
	)
}

export default SearchFilterButton