export function addFavorites(video){
    return{
        type: 'ADD_FAVORITES',
        payload: video
    }
}

export function addWatchlater(video){
    return{
        type: 'ADD_WATCHLATER',
        payload: video
    }
}

export function removeVideo(video){
    return{
        type: 'REMOVE_VIDEO',
        payload: video
    }
}

export function playVideo(video){
    return{
        type: 'PLAY_VIDEO',
        payload: video
    }
}