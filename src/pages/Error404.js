import React from "react";
import { Link } from 'react-router-dom'

function Error404 (){
    return(
        <React.Fragment>
            <h1>Error 404</h1>
            <Link to="/">Volver al home</Link> 
        </React.Fragment>
    )
}

export { Error404 }