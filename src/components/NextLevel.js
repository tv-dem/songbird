import React from 'react'

export default function({active, onClick}){
    let classAdd="";
    let handleClick=()=>{return}
    if(active) {
        classAdd="active"
        handleClick=onClick;
    }
    return(
        <button className={`${classAdd}`} onClick={handleClick}>next level</button>
    )
}