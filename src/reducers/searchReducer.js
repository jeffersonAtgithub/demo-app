import { reactLocalStorage } from 'reactjs-localstorage'

const videos = reactLocalStorage.getObject('videos')

const searchState = {
    term: 'test',
    searchtitles: {
        'new': 'New Youtube Videos',
        'favorites': 'Favorite Videos',
        'watch later': 'Watched Later Videos'
    },
    videos: {
        'new': (videos.new) ? videos.new : [],
        'favorites': (videos.favorites) ? videos.favorites : [],
        'watch later': (videos['watch later']) ? videos['watch later'] : []
    }
}

const searchReducer = (state = searchState, action) => {
    switch (action.type){
        case 'SET_SEARCH_TERM':
            state = {
                ...state,
                term: action.payload
            }
            break
        case 'NEW_SEARCH':
            state = {
                ...state,
                videos: {
                    ...state.videos,
                    'new': action.payload
                }
            }
            break
        case 'FILTER_SEARCH':
            state = {
                ...state,
                videos: {
                    ...state.videos,
                    'filter': action.payload
                }
            }
            break
        case 'WATCHLATER_SEARCH':
            state = {
                ...state,
                videos: {
                    ...state.videos,
                    'watch later': action.payload
                }
            }
            break
    }

    return state
}

export default searchReducer