import React from 'react'
import { Icon } from '@iconify/react';
import { Button } from '../Button/Button';
import './ProjectModal.css'

function ProjectModal({
    nameProject,
    data,
    setOpenModal
}) {

    const project = data.find(item => item.name == nameProject)


    return (
        <article
            className="Project__container"
        >
            <img className="image-project" src={project.image} alt={project.name} />

            <div className="Close-modal__button__container">
                <div className="Close-modal__button-bg"></div>
                <button
                    className='Close-modal__button'
                    onClick={() => setOpenModal(false)}
                >
                    {/* <span className='icon-close'>
                        x
                    </span> */}
                    <Icon icon="pixelarticons:close" className='icon-close' />
                </button>
            </div>

            <div className='container__info'>
                <h2 className="Title-project">{project.name}</h2>

                <div className="Description-project" >
                    {
                        (project.description.isList)
                            ?
                            <ul className="Description-project__ul">
                                {project.description.text.map(element => {
                                    return (
                                        <li key={element} className="Description-project__li text">
                                            {element}
                                        </li>
                                    )
                                })}
                            </ul>
                            :
                            <p className="Description-project__text text">
                                {project.description.text[0]}
                            </p>
                    }
                </div>
                {/* <div className='flex-container__btn-tech'> */}
                <div className="Tech-project">
                    <h3>Tecnologias</h3>
                    <ul>

                        {
                            project.tech.map(item => {
                                return (
                                    <li key={item.name}>
                                        {/* <i key={item.name} className={item.icon}></i> */}
                                        <Icon icon={item.icon} />
                                        {item.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="buttons__container-project">
                    <Button
                        type="secondary button-project"
                        text={<span>ver</span>}
                        url={project.url}
                    />
                    {project.repository && (
                        <Button
                            type="primary button-project"
                            text={<span>GitHub</span>}
                            url={project.repository}
                        />
                    )}

                </div>

                {/* </div> */}
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

export { ProjectModal }