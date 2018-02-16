import React, { Component } from 'react'
import SearchFilterButtons from './search_filter_button'
import SearchBar from './search_bar'
import { createStore, combineReducer } from 'redux'
import { connect } from 'react-redux'

class Search extends Component {
	render(){		
		const searchbuttons = this.props.buttonState.buttons
		const buttons = Object.entries(searchbuttons).map(([key, value]) => (
			<SearchFilterButtons classes={value} key={`button-${key}`} buttontext={key} setButtonActive={()=> this.props.setButtonActive(key)}/>
		))
		return(
			<div className='row search-container'>
				<div className='col-md-5'>
				{buttons}
				</div>
				
				<SearchBar currentsearch={this.props.searchState.currentsearch} onSearchChange={(term)=>this.props.setSearch(term)} activefilter={this.props.buttonState.activefilter}/>
				
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		buttonState: state.buttonFilterReducer,
		searchState: state.searchReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		setButtonActive: (buttonname) => {
			dispatch({
				type: "CHANGE_ACTIVE",
				payload: buttonname
			})
		},
		setSearch: (term) => {
			dispatch({
				type: "CHANGE_SEARCH",
				payload: term
			})
			console.log('term', term)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)