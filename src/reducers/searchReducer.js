const searchState = {
    term: 'test',
    searchtitles: {
        'new': 'New videos from youtube',
        'favorites': 'Favorite videos',
        'watch later': 'Videos to be watched later'
    },
    videos: []
}

const searchReducer = (state = searchState, action) => {
    switch (action.type){
        case 'SET_SEARCH':
            state = {
                ...state,
                term: action.payload
            }
            break
        case 'NEW_SEARCH':
            state = {
                ...state,
                videos: action.payload
            }
            break
    }

    return state
}

export default searchReducer