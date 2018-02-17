const videoState = {
    hovered: false
}

const videoReducer = (state = videoState, action) => {
    switch (action.type){
        case 'TOGGLE_HOVER':
            state = {
                ...state,
                hovered: action.payload
            }
            break
    }

    return state
}

export default videoReducer