import React from 'react'

const ModalVideo = (props) => {
    let url = 'https://giphy.com/gifs/sSgvbe1m3n93G/html5'
    const isvideonotnull = Object.keys(props.video).length < 1
    if(!isvideonotnull)
         url =`https://www.youtube.com/embed/${props.video.yid.videoId}?autoplay=1`

    return (
        <div>
            <div id='videoModal' className={`modal fade ${props.modalshown ? 'modal-show' : ''}`} role='dialog'>
                <div className='modal-dialog modal-lg'>
                    <div className='modal-content'>
                        <div className='modal-body embed-responsive embed-responsive-16by9'>
                            <iframe allowFullScreen='allowFullScreen' className='embed-responsive-item' src={url}/>
                        </div>
                        <div className='modal-footer'>
                            <span className='video-description'>{!isvideonotnull ? props.video.snippet.description : ''}</span>
                            <button type='button' onClick={() => props.onToggleModal(false)} className='btn btn-info'>Close</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ModalVideo