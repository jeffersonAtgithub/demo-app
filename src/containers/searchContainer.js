import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reactLocalStorage } from 'reactjs-localstorage'

import SearchFilterButton from '../components/searchFilterButton'
import SearchBar from '../components/searchBar'
import SearchContent from '../components/searchContent'

import { setButtonActive } from '../actions/buttonFilterAction'
import { setSearch, newSearch } from '../actions/searchAction'

class SearchContainer extends Component {

    render(){
        const searchbuttons = this.props.buttonstate.buttons
        const buttons = Object.entries(searchbuttons).map(([key, value]) => (
            <SearchFilterButton classes={value} key={`button-${key}`} buttontext={key} setButtonActive={()=> this.props.setButtonActive(key)}/>
        ))
        console.log(this.props.searchstate.videos)
        const searchvideos = Object.entries(this.props.searchstate.videos).map(([key, value]) => {
            const activesection = (key === this.props.buttonstate.activefilter) ? 'active' : ''
            const customedvideos = (!activesection && value.length > 0) ? value.slice(0, 4) : value
            return (
                <div className={`search-section ${activesection}`} key={`video-container-${key.replace(' ', '-')}`}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12 search-title'>
                                <h4>
                                    {this.props.searchstate.searchtitles[key]}
                                </h4>
                            </div>
                            <div className='col-md-12 search-content'>
                                <SearchContent searchtitle={key} videos={customedvideos}/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

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
                {searchvideos}
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
            const videosobj = reactLocalStorage.getObject('videos')
            reactLocalStorage.setObject('videos', {...videosobj, 'new': videos})
            dispatch(newSearch(videos))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)