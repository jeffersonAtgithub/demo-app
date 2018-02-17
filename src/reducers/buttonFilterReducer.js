const buttonsState = {
    buttons: {
        'new': 'btn-search',
        'favorites': 'btn-search',
        'watch later': 'btn-search'
    },
    activefilter: 'new'
}
const buttonFilterReducer = (state = buttonsState, action) => {
    if (action.type == 'CHANGE_ACTIVE') {
        state = {
            buttons: {
                ...buttonsState.buttons,
                [action.payload]: 'btn-search active'
            },
            activefilter: action.payload
        }
    }

    return state
}

export default buttonFilterReducer