import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reactLocalStorage } from 'reactjs-localstorage'

import SearchFilterButton from '../components/searchFilterButton'
import SearchBar from '../components/searchBar'
import SearchContent from '../components/searchContent'
import ModalVideo from '../components/modal'

import { setButtonActive } from '../actions/buttonFilterAction'
import { newSearch, toggleModal, filterSearch } from '../actions/contentAction'

class SearchContainer extends Component {

    render(){
        const {contentstate, buttonstate, setButtonActive, newSearch, filterSearch, toggleModal} = this.props
        const activefilter = (buttonstate.activefilter != '') ? buttonstate.activefilter : 'new'
        const searchbuttons = !buttonstate.activefilter ? {...buttonstate.buttons, new: 'btn-search active'} : buttonstate.buttons
        console.log('searchbuttons', searchbuttons)
        const buttons = Object.entries(searchbuttons).map(([key, value]) => (
            <SearchFilterButton classes={value} key={`button-${key}`} buttontext={key} setButtonActive={()=> setButtonActive(key)}/>
        ))
        const sortedarray = {[activefilter]: contentstate.videos[activefilter],...contentstate.videos}
        console.log('sortedarray', sortedarray)
        const searchedvideos = Object.entries(sortedarray).map(([key, value]) => {
            const activesection = (key === activefilter) ? 'active' : ''
            const reversedarr = [...value].reverse()
            const customedvideos = (!activesection && reversedarr.length > 0) ? reversedarr.slice(0, 4) : reversedarr
            return (
                <div className={`search-section ${activesection}`} key={`video-container-${key.replace(' ', '-')}`}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12 search-title'>
                                <h4>
                                    {contentstate.searchtitles[key]}
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
            <div>
                <div className='search-content'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-5'>
                                {buttons}
                            </div>
                            <SearchBar newSearch={(videos) => newSearch(videos)} term={contentstate.term} onSearchChange={(term, from)=>filterSearch(term, from)} activefilter={activefilter}/>
                        </div>
                    </div>
                    {searchedvideos}

                </div>
                <div>
                    <ModalVideo modalshown={contentstate.modalshown} onToggleModal={modalshown => toggleModal(modalshown)} video={contentstate.activevideo} />
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return{
        buttonstate: state.buttonFilterReducer,
        contentstate: state.contentReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setButtonActive: (buttonname) => {
            dispatch(setButtonActive(buttonname))
        },
        newSearch: (videos) => {
            const videosobj = reactLocalStorage.getObject('videos')
            reactLocalStorage.setObject('videos', {...videosobj, 'new': videos})
            dispatch(newSearch(videos))
        },
        filterSearch: (term, from) => {
            dispatch(filterSearch(term, from))
        },
        toggleModal: (modalshown) => {
            dispatch(toggleModal(modalshown))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)