import React, {Component} from 'react'

import Controls from './controls'
import {connect} from "react-redux";
import {addFavorites, addWatchlater, removeVideo, playVideo} from "../actions/videoAction";
import {reactLocalStorage} from "reactjs-localstorage";

class Video extends Component {

    render(){
        const {video, sectionname, videostate, addFavorites, addWatchlater, removeVideo, playVideo} = this.props
        return (
            <div className='col-md-3 item'>
                <div className='item-image'>
                    <div className='controls'>
                        <Controls onControlClick={() => addFavorites(video)} classes={!videostate.controldefaults[sectionname].includes('Add to Favorites') ? 'control-hide' : ''} text='Add to Favorites' />
                        <Controls onControlClick={() => addWatchlater(video)} classes={!videostate.controldefaults[sectionname].includes('Watch Later') ? 'control-hide' : ''} text='Watch Later' />
                        <Controls onControlClick={() => removeVideo(video)} classes={!videostate.controldefaults[sectionname].includes('Remove') ? 'control-hide' : ''} text='Remove' />
                        <Controls onControlClick={() => playVideo(video)} classes={!videostate.controldefaults[sectionname].includes('Play') ? 'control-hide' : ''} text='Play' />
                    </div>
                    <img className="img-responsive" src={video.snippet.thumbnails.medium.url} alt={this.props.video.snippet.title}/>
                </div>
                <div className='item-title'>{video.snippet.title}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        videostate: state.videoReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addFavorites: (video) => {
            console.log('video', video)
            dispatch(addFavorites(video))
        },
        addWatchlater: (video) => {
            console.log('video', video)
            dispatch(addWatchlater(video))
        },
        removeVideo: (video) => {
            console.log('video', video)
            dispatch(removeVideo(video))
        },
        playVideo: (video) => {
            console.log('video', video)
            dispatch(playVideo(video))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Video)