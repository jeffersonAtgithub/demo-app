const buttonsState = {
    buttons: {
        'new': 'btn-search',
        'favorites': 'btn-search',
        'watch later': 'btn-search'
    },
    activefilter: 'new'
}

const buttonFilterReducer = (state = buttonsState, action) => {
    switch(action.type) {
        case 'CHANGE_ACTIVE':
            state = {
                buttons: {
                    ...buttonsState.buttons,
                    [action.payload]: 'btn-search active'
                },
                activefilter: action.payload
            }
            break
        default:
            state = {
                ...buttonsState,
                buttons: {
                    ...buttonsState.buttons,
                    'new': 'btn-search active'
                }
            }
    }

    return state
}

export default buttonFilterReducer