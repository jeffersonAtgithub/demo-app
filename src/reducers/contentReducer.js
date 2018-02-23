const contentState = {
    searchtitles: {
        'new': 'New Youtube Videos',
        'favorites': 'Favorite Videos',
        'watchlater': 'Watch Later Videos'
    },
    videos: {
        'new': [],
        'favorites': [],
        'watchlater': []
    },
    controldefaults: {
        'new': ['Add to Favorites', 'Watch Later', 'Remove', 'Play'],
        'favorites': ['Watch Later', 'Remove', 'Play'],
        'watchlater': ['Add to Favorites', 'Remove', 'Play']
    },
    activevideo: {},
    modalshown: false
}

const contentReducer = (state = contentState, action) => {
    switch (action.type){
        case 'NEW_SEARCH':
            return {
                ...state,
                videos: {
                    ...state.videos,
                    'new': action.payload
                }
            }
        case 'DISPLAY_VIDEO':
            return {
                ...state,
                videos: {...action.payload}
            }
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
            return {
                ...state,
                videos: {
                    ...state.videos,
                    [action.payload.from]: [...action.payload.videos]
                }
            }
        case 'PLAY_VIDEO':
            return{
                ...state,
                activevideo: action.payload,
                modalshown: true
            }
        case 'TOGGLE_MODAL':
            return {
                ...state,
                activevideo: {},
                modalshown: action.payload
            }
    }

    return state
}

export default contentReducer