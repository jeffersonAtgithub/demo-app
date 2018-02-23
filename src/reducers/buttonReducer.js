const buttonsState = {
    buttons: {
        'new': 'btn-search',
        'favorites': 'btn-search',
        'watchlater': 'btn-search'
    },
    activefilter: '',
    pagination: {
        'new': [0,8],
        'favorites': [0,8],
        'watchlater': [0,8]
    }
}

const buttonReducer = (state = buttonsState, action) => {
    switch(action.type) {
        case 'CHANGE_ACTIVE':
            return {
                ...buttonsState,
                buttons: {
                    ...buttonsState.buttons,
                    [action.payload]: 'btn-search active'
                },
                activefilter: action.payload
            }
        case 'PAGE_CHANGE':
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    ...action.payload
                }
            }
    }

    return state
}

export default buttonReducer