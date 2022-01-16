import React from "react";
import './Button.css'


function Button({ 
    type, //Classe o typo del boton 'primary' o 'secondary'
    text, //Texto del botton
    url, //A donde te enivia el boton
}){
    return(
        <a className={`button ${type}`} href={url} target="_blank" rel="noopener noreferrer"
        onClick={(e)=> e.stopPropagation() }>
            {text}
        </a>
    )
}

export { Button }