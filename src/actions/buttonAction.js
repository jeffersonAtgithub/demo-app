export function setButtonActive(buttonname){
    return {
        type: 'CHANGE_ACTIVE',
        payload: buttonname
    }
}

export function handlePageChange(pagenumber, activefilter){
    const pagevideo = (pagenumber*8)-8
    return {
        type: 'PAGE_CHANGE',
        payload: {
            [activefilter]: [pagevideo, pagevideo+8]
        }
    }
}