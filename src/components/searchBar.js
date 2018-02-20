import React from 'react'
import YouTubeAutocomplete from 'react-youtube-autocomplete'

const SearchBar = (props) => {
	return(
		<div className='col-md-7 searchbar'>
			<div className={`filter-search ${(props.activefilter === 'new') ? 'hide-search' : ''}`}>
				<i className='fa fa-search' />
				<input onChange={(e)=>props.onSearchChange(e.target.value, props.activefilter)} className='hidden form-control search-input' placeholder='Search...'/>
		 	</div>

		 	<div className={`autocomplete-search ${(props.activefilter !== 'new') ? 'hide-search' : ''}`}>
		 		<i className='fa fa-search' />
			 	<YouTubeAutocomplete
			        apiKey='AIzaSyBHpKN4Q6Dk-lAfomnxEiacDen1dGB3fZg'
			        placeHolder='Search...'
			        maxResults='12'
					callback= {(videos)=> props.newSearch(videos)}
		      	/>
		  	</div>
	  	</div>
	)
  	
}


export default SearchBar