import axios from 'axios'

export function displayVideos(){
    return (dispatch) => {
        axios.get(`http://localhost:3000/db`)
            .then((response) => {

                dispatch({
                    type: 'DISPLAY_VIDEO',
                    payload: {
                        new: response.data.new,
                        favorites: response.data.favorites,
                        watchlater: response.data.watchlater
                    }
                })
            })
    }
}

export function newSearch(videos){
    return (dispatch) => {
        axios.get(`http://localhost:3000/new`)
            .then((response) => {
                videos.map((video, i) => {
                    const newvideo = {...video, yid: video.id, id: new Date().getTime() + '' + i}
                    axios.post(`http://localhost:3000/new/`, newvideo)
                    response.data.push(newvideo)
                })
                dispatch({
                    type: 'NEW_SEARCH',
                    payload: response.data
                })
            })
    }
}

export function filterSearch(term, from){
    return (dispatch) => {
        axios.get(`http://localhost:3000/${from}`)
            .then(function (response) {
                const storedvideos = response.data.length ? response.data : []
                const searchresult = storedvideos.filter(video => video.snippet.title.toLowerCase().includes(term.toLowerCase()))

                dispatch({
                    type: 'FILTER_VIDEO',
                    payload: {
                        videos: searchresult,
                        from: from
                    }
                })
            })
    }

}

export function alterVideo(video, from, to){
    return (dispatch) => {
        axios.get(`http://localhost:3000/db`)
            .then((response) => {
                const storedvideos = response.data[from].length ? response.data[from] : []
                const removevideo = storedvideos.find(v => v.etag == video.etag)
                storedvideos.splice(storedvideos.indexOf(removevideo), 1)
                response.data[to].push(removevideo) //pushes the
                axios.post(`http://localhost:3000/${to}`, removevideo)
                axios.delete(`http://localhost:3000/${from}/${removevideo.id}`)

                dispatch({
                    type: 'ALTER_VIDEO',
                    payload: {
                        [from]: storedvideos,
                        [to]: response.data[to]
                    }
                })
            })
    }
}

export function removeVideo(video, from){
    return (dispatch) => {
        axios.get(`http://localhost:3000/${from}`)
            .then((response) => {
                const storedvideos = response.data
                const removevideo = storedvideos.find(v => v.etag == video.etag)
                storedvideos.splice(storedvideos.indexOf(removevideo), 1)
                axios.delete(`http://localhost:3000/${from}/${removevideo.id}`)

                const newvideos = {
                    [from]: storedvideos
                }

                dispatch({
                    type: 'ALTER_VIDEO',
                    payload: newvideos
                })
            })
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