import React from 'react'
import Video from './video'

const SearchContent = (props) => {

    if(!props.videos.length){
        return(
            <div className='row no-search'>
                <div className="col-md-12">
                    <h3>{props.searchtitle == 'new' ? 'Search new' : 'Add from new'} videos</h3>
                </div>
            </div>
        )
    }

    const videos = props.videos.map((video,i) => (
        <Video sectionname={props.searchtitle} video={video} key={`video-${i}`}/>
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

export default SearchContent