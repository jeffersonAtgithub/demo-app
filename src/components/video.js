import React, {Component} from 'react'

import Controls from './controls'
import {connect} from 'react-redux'
import {addFavorites, addWatchlater, removeVideo, playVideo} from '../actions/contentAction';

class Video extends Component {

    render(){
        const {video, sectionname, contentstate, addFavorites, addWatchlater, removeVideo, playVideo} = this.props
        const from = sectionname
        return (
            <div className='col-md-3 item'>
                <div className='item-image'>
                    <div className='controls'>
                        <Controls onControlClick={() => addFavorites(video, from)} classes={!contentstate.controldefaults[sectionname].includes('Add to Favorites') ? 'control-hide' : ''} text='Add to Favorites' />
                        <Controls onControlClick={() => addWatchlater(video, from)} classes={!contentstate.controldefaults[sectionname].includes('Watch Later') ? 'control-hide' : ''} text='Watch Later' />
                        <Controls onControlClick={() => removeVideo(video, from)} classes={!contentstate.controldefaults[sectionname].includes('Remove') ? 'control-hide' : ''} text='Remove' />
                        <Controls onControlClick={() => playVideo(video, from)} classes={!contentstate.controldefaults[sectionname].includes('Play') ? 'control-hide' : ''} text='Play' />
                    </div>
                    <img className='img-responsive' src={video.snippet.thumbnails.medium.url} alt={this.props.video.snippet.title}/>
                </div>
                <div className='item-title'>{video.snippet.title}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        contentstate: state.contentReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addFavorites: (video, from) => {
            dispatch(addFavorites(video, from))
        },
        addWatchlater: (video, from) => {
            dispatch(addWatchlater(video, from))
        },
        removeVideo: (video, from) => {
            dispatch(removeVideo(video, from))
        },
        playVideo: (video, from) => {
            dispatch(playVideo(video, from))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Video)