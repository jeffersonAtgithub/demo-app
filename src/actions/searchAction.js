export function setSearch(term){
    return {
        type: "SET_SEARCH",
        payload: term
    }
}

export function newSearch(videos){
    return {
        type: "NEW_SEARCH",
        payload: videos
    }
}

export function filterSearch(videos){
    return {
        type: "FILTER_SEARCH",
        payload: videos
    }
}

export function watchLaterSearch(videos){
    return {
        type: "FILTER_SEARCH",
        payload: videos
    }
}