import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchFilterButton from './searchFilterButton'
import SearchBar from './searchBar'
import SearchContent from './searchContent'

import { setButtonActive } from '../actions/buttonFilterAction'
import { setSearch, newSearch } from '../actions/searchAction'

class Search extends Component {

	render(){
		const searchbuttons = this.props.buttonstate.buttons
		const buttons = Object.entries(searchbuttons).map(([key, value]) => (
			<SearchFilterButton classes={value} key={`button-${key}`} buttontext={key} setButtonActive={()=> this.props.setButtonActive(key)}/>
		))
		const searchtitle = this.props.buttonstate.activefilter
		return(
			<div className='search-content'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-5'>
						{buttons}
						</div>

						<SearchBar newSearch={(videos) => this.props.newSearch(videos)} term={this.props.searchstate.term} onSearchChange={(term)=>this.props.setSearch(term)} activefilter={this.props.buttonstate.activefilter}/>
					</div>
				</div>
				<div className='search-section'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-12 search-title'>
								<h4>
									{this.props.searchstate.searchtitles[searchtitle]}
								</h4>
							</div>
							<div className='col-md-12 search-content'>
								<SearchContent videos={this.props.searchstate.videos}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		buttonstate: state.buttonFilterReducer,
		searchstate: state.searchReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		setButtonActive: (buttonname) => {
			dispatch(setButtonActive(buttonname))
		},
		setSearch: (term) => {
			dispatch(setSearch(term))
		},
		newSearch: (videos) => {
			dispatch(newSearch(videos))
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Search)