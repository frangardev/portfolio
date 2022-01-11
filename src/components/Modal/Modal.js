import React from "react";
import ReactDom from "react-dom";
import './Modal.css'

function Modal({setOpenModal,children}){

    return ReactDom.createPortal(
        <div
            className="Modal"
        >
            <div 
                className="ModalBackground"
                onClick={ ()=> setOpenModal(false) }
                >
            </div>
            {children}
        </div>,
        document.getElementById('modal')
    )
}

export {Modal}