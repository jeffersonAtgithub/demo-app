import React, { Component } from 'react'
import { connect } from 'react-redux'
import Pagination from 'react-js-pagination'

import SearchFilterButton from './searchFilterButton'
import SearchBar from './searchBar'
import SearchContent from './searchContent'
import ModalVideo from './modal'

import { setButtonActive, handlePageChange } from '../actions/buttonAction'
import { displayVideos, newSearch, toggleModal, filterSearch } from '../actions/contentAction'

class DemoApp extends Component {

    componentDidMount(){
        this.props.displayVideos()
    }

    render(){
        const {contentstate, buttonstate, setButtonActive, newSearch, filterSearch, toggleModal, handlePageChange} = this.props
        const activefilter = (buttonstate.activefilter != '') ? buttonstate.activefilter : 'new'
        const searchbuttons = !buttonstate.activefilter ? {...buttonstate.buttons, new: 'btn-search active'} : buttonstate.buttons
        const buttons = Object.entries(searchbuttons).map(([key, value]) => (
            <SearchFilterButton classes={value} key={`button-${key}`} buttontext={key} setButtonActive={()=> setButtonActive(key)}/>
        ))
        const sortedarray = {[activefilter]: contentstate.videos[activefilter],...contentstate.videos}
        const searchedvideos = Object.entries(sortedarray).map(([key, value]) => {
            const activesection = (key === activefilter) ? 'active' : ''
            const reversedarr = [...value].reverse()
            const customedvideos = (!activesection && reversedarr.length > 0) ? reversedarr.slice(0, 4) : [...reversedarr].slice(buttonstate.pagination[activefilter][0], buttonstate.pagination[activefilter][1])

            const pagination = () => {
                if(activesection == 'active'){

                    return(<Pagination
                        activePage={buttonstate.pagination[activefilter][1]/8}
                        totalItemsCount={reversedarr.length}
                        itemsCountPerPage={8}
                        pageRangeDisplayed={100}
                        prevPageText='' nextPageText='' hideNavigation={true}
                        itemClass='page-item'
                        activeClass='active'
                        onChange={(pagenumber) => handlePageChange(pagenumber, activefilter)}
                    />)
                }else{
                    return ''
                }
            }
            return (
                <div className={`search-section ${activesection}`} key={`video-container-${key}`}>
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
                        {pagination()}
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
        buttonstate: state.buttonReducer,
        contentstate: state.contentReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        displayVideos: () => {
            dispatch(displayVideos())
        },
        setButtonActive: (buttonname) => {
            dispatch(setButtonActive(buttonname))
        },
        newSearch: (videos) => {
            dispatch(newSearch(videos))
        },
        filterSearch: (term, from) => {
            dispatch(filterSearch(term, from))
        },
        toggleModal: (modalshown) => {
            dispatch(toggleModal(modalshown))
        },
        handlePageChange: (pagenumber, activefilter) => {
            dispatch(handlePageChange(pagenumber, activefilter))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoApp)