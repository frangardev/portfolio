import React from 'react'
import { Button } from '../Button/Button';
import './ProjectModal.css'

function ProjectModal({
    nameProject,
    data,
    setOpenModal
}){

    const project = data.find( item => item.name == nameProject) 
    
    return (
        <article 
            className="Project__container"  
        >  
            <img className="image-project" src={project.image} alt={project.name}/>

            <div className="Close-modal__button__container">
                <div className="Close-modal__button-bg"></div>
                <button 
                    className='Close-modal__button'
                    onClick={ ()=> setOpenModal(false) }
                    >
                    <i className="fas fa-chevron-left"></i>
                </button>
            </div>
            
            <h2 className="Title-project">{project.name}</h2>
            
            <div className="Description-project">
                {project.description}
            </div>
            
            <div className="Tech-project">{
                project.tech.map(item =>{
                    return(<i key={item.name} className={item.icon}></i>)
                })
            }</div>
            
            <div className="buttons__container-project">
                 <Button
                    type = "secondary button-project"
                    text= {<span>ver</span>}
                    url={project.url}
                />
                <Button
                    type = "primary button-project"
                    text= {<span>GitHub</span>}
                    url={project.repository}
                />

            </div>
            
            <div className="borde borde-up"></div>
            <div className="borde borde-left-up"></div>
            <div className="borde borde-left"></div>
            <div className="borde borde-left-down"></div>
            <div className="borde borde-down"></div>
            <div className="borde borde-right-down"></div>
            <div className="borde borde-right"></div>
            <div className="borde borde-right-up"></div>
        </article>
    )
}

export {ProjectModal}