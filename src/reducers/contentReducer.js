import { reactLocalStorage } from 'reactjs-localstorage'

const videos = reactLocalStorage.getObject('videos')

const contentState = {
    searchtitles: {
        'new': 'New Youtube Videos',
        'favorites': 'Favorite Videos',
        'watch later': 'Watched Later Videos'
    },
    videos: {
        'new': (videos.new) ? videos.new : [],
        'favorites': (videos.favorites) ? videos.favorites : [],
        'watch later': (videos['watch later']) ? videos['watch later'] : []
    },
    controldefaults: {
        'new': ['Add to Favorites', 'Watch Later', 'Remove', 'Play'],
        'favorites': ['Watch Later', 'Remove', 'Play'],
        'watch later': ['Add to Favorites', 'Remove', 'Play']
    },
    activevideo: {},
    modalshown: false
}

const contentReducer = (state = contentState, action) => {
    switch (action.type){
        case 'NEW_SEARCH':
            state = {
                ...state,
                videos: {
                    ...state.videos,
                    'new': action.payload
                }
            }
            break
        case 'ALTER_VIDEO':
            state = {
                ...state,
                videos: {
                    ...state.videos,
                    ...action.payload
                }
            }
            break
        case 'FILTER_VIDEO':
            state = {
                ...state,
                videos: {
                    ...state.videos,
                    [action.payload.from]: [...action.payload.videos]
                }
            }
            break
        case 'PLAY_VIDEO':
            state = {
                ...state,
                activevideo: action.payload,
                modalshown: true
            }
            break
        case 'TOGGLE_MODAL':
            state = {
                ...state,
                activevideo: {},
                modalshown: action.payload
            }
            break
    }

    return state
}

export default contentReducer