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