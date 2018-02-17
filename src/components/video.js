import React from 'react'

import Controls from './controls'

const Video = ({video}) => {
    return (
        <div className='col-md-3 item'>
            <div className='item-image'>
                <Controls />
                <img className="img-responsive" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
            </div>
            <div className='item-title'>{video.snippet.title}</div>
        </div>
    )
}

export default Video