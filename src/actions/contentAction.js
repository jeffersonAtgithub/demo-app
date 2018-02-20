import {reactLocalStorage} from 'reactjs-localstorage'

export function newSearch(videos){
    return {
        type: "NEW_SEARCH",
        payload: videos
    }
}

export function filterSearch(term, from){
    const storedvideos = reactLocalStorage.getObject('videos')
    const videos = (storedvideos[from] != undefined) ? storedvideos[from] : []
    const searchresult = videos.filter(video => video.snippet.title.toLowerCase().includes(term.toLowerCase()))
    console.log('searchresult', searchresult)
    return {
        type: "FILTER_VIDEO",
        payload: {
            videos: searchresult,
            from: from
        }
    }
}

export function addFavorites(video, from){
    const storedvideos = reactLocalStorage.getObject('videos')
    const removevideo = storedvideos[from].find(v => v.etag == video.etag)
    const favoritevideos = (storedvideos.favorites != undefined) ? storedvideos.favorites : []
    storedvideos[from].splice(storedvideos[from].indexOf(removevideo), 1)
    favoritevideos.push(removevideo)
    const newvideos = {
        'favorites': favoritevideos,
        [from]: storedvideos[from]
    }

    reactLocalStorage.setObject('videos', {...storedvideos, ...newvideos})

    return{
        type: 'ALTER_VIDEO',
        payload: newvideos
    }
}

export function addWatchlater(video, from){
    const storedvideos = reactLocalStorage.getObject('videos')
    const removevideo = storedvideos[from].find(v => v.etag == video.etag)
    const watchlatervideos = (storedvideos['watch later'] != undefined) ? storedvideos['watch later'] : []
    storedvideos[from].splice(storedvideos[from].indexOf(removevideo), 1)
    watchlatervideos.push(removevideo)
    const newvideos = {
        'watch later': watchlatervideos,
        [from]: storedvideos[from]
    }

    reactLocalStorage.setObject('videos', {...storedvideos, ...newvideos})

    return{
        type: 'ALTER_VIDEO',
        payload: newvideos
    }
}

export function removeVideo(video, from){
    const storedvideos = reactLocalStorage.getObject('videos')
    const removevideo = storedvideos[from].find(v => v.etag == video.etag)
    storedvideos[from].splice(storedvideos[from].indexOf(removevideo), 1)
    const newvideos = {
        [from]: storedvideos[from]
    }

    reactLocalStorage.setObject('videos', {...storedvideos, ...newvideos})

    return{
        type: 'ALTER_VIDEO',
        payload: newvideos
    }
}

export function playVideo(video){
    return{
        type: 'PLAY_VIDEO',
        payload: video
    }
}

export function toggleModal(modalshown){
    return{
        type: 'TOGGLE_MODAL',
        payload: modalshown
    }
}