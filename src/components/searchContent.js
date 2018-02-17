import React from 'react'
import { connect } from 'react-redux'

import Video from './video'

import {toggleHover} from '../actions/videoAction'

const SearchContent = (props) => {

    if(!props.videos.length){
        return(
            <div className='row no-search'>
                <div className="col-md-12">
                    <h3>No Videos... Make a new search.</h3>
                </div>
            </div>
        )
    }

    const videos = props.videos.map((video,i) => (
        <Video video={video} key={`video-${i}`}/>
    ))

    return(
        <div className='with-search'>
            <div className="col-md-12">
                <div className="row">
                    {videos}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        videostate: state.videoReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        toggleHover: (hovered) => {
            dispatch(toggleHover(hovered))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchContent)