const buttonsState = {
    buttons: {
        'new': 'btn-search',
        'favorites': 'btn-search',
        'watch later': 'btn-search'
    },
    activefilter: ''
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
    }

    return state
}

export default buttonFilterReducer