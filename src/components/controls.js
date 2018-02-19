import React from 'react'

const Controls = (props) => {
    return(
        <div className={`btn-control ${props.classes}`} onClick={()=>props.onControlClick()}>{props.text}</div>
    )
}

export default Controls