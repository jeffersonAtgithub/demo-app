export function setButtonActive(buttonname){
    return {
        type: "CHANGE_ACTIVE",
        payload: buttonname
    }
}