import React from "react";
import './Loading.css'

function Loading(){
    return(
        <div className="loading__container" onLoad={()=>console.log('Cargando...')}>
             <div className="loading-square-2 loading__draw"></div>
             <div className="loading-square-1 loading__draw"></div>
             <div className="loading-square-3 loading__draw"></div>
        </div>
    )
}

export { Loading }