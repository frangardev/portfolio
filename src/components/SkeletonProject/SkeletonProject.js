import React from "react"
import './SkeletonProject.css'

function SkeletonProject(props){
    return(
        <div className={`loading ${props.type}`}></div>
    )
}

export { SkeletonProject }