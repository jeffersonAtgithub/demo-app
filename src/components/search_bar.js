import React from 'react'
import YouTubeAutocomplete from 'react-youtube-autocomplete'

const SearchBar = (props) => {
	
	return(
		<div className='col-md-7 searchbar'>
			<div className={`filter-search ${(props.activefilter == 'new') ? 'hide-search' : ''}`}>
				<i className='fa fa-search'></i>
				<input onChange={(e)=>props.onSearchChange(e.target.value)} className='hidden form-control search-input' placeholder='Search...'/>
		 	</div>

		 	<div className={`autocomplete-search ${(props.activefilter != 'new') ? 'hide-search' : ''}`}>
		 		<i className='fa fa-search'></i>
			 	<YouTubeAutocomplete
			        apiKey='AIzaSyBHpKN4Q6Dk-lAfomnxEiacDen1dGB3fZg'
			        placeHolder='Search...'
			        maxResults='10'
			        callback= {(result)=>{
			        	console.log(result)
			        }}
		      	/>
		  	</div>
	  	</div>
	)
  	
}


export default SearchBar