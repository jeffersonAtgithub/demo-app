const controlState = {
    controldefaults: {
        'new': ['Add to Favorites', 'Watch Later', 'Remove', 'Play'],
        'favorites': ['Watch Later', 'Remove', 'Play'],
        'watch later': ['Add to Favorites', 'Remove', 'Play']
    },
    test: ''
}

const controlReducer = (state = controlState, action) => {
    switch(state.type){
        case 'ADD_FAVORITES':
            state = {
                ...state,
                test: 'ADD_FAVORITES'
            }
            break
        case 'ADD_WATCHLATER':
            console.log('ADD_WATCHLATER')
            break
        case 'REMOVE_VIDEO':
            console.log('REMOVE_VIDEO')
            break
        case 'PLAY_VIDEO':
            console.log('PLAY_VIDEO')
            break
    }
    return state
}

export default controlReducer