import React, { useState } from "react";
import { Button } from "../Button/Button";
import { SkeletonProject } from "../SkeletonProject/SkeletonProject.js";
import './ProjectItem.css'
import SliderItem from "./SliderItem";

function ProjectItem({
    name,
    image,
    url,
    repository,
    tech,
    openModal,
    setOpenModal,
    setDataProject,
    loadingImage,
}) {
    const [hover, setHover] = useState(false)
    const isHover = (hoverValue) => {
        setHover(hoverValue)
    }
    let cutName = name
    if (name.length > 9) {
        cutName = cutName.substring(0, 9) + '...'
    }
    const seeProject = () => {
        if (!openModal) {
            isHover(false)
            setDataProject(name)
            setOpenModal(true)
        }
    }
    console.log(image)

    if (image.length >= 2) {
        return (
            <SliderItem
                image={image}
                name={name}
                isHover={isHover}
                seeProject={seeProject}
                loadingImage={loadingImage}
                hover={hover}
                repository={repository}
                tech={tech}
                cutName={cutName}
            />
        )
    } else {
        return (
            <figure
                className="ProjectItem"
                onMouseEnter={() => isHover(true)}
                onMouseLeave={() => isHover(false)}
                onClick={seeProject}
            >

                {!loadingImage && (<SkeletonProject type='loading-item-project' />)}
                <img
                    className={`ImageProject ${loadingImage && 'loaded'}`}
                    // loading="lazy" 
                    src={image}
                    alt={name}
                />

                <figcaption className={`data-project ${hover && 'hover__item'}`}>
                    <h4 className="data-project__name">{cutName}</h4>
                    <Button
                        type='secondary button__data-project'
                        text={
                            <React.Fragment>
                                <samp className="icon__container-card">
                                    <i className="fas fa-arrow-right"></i>
                                </samp>
                                <span className="text__container-card">
                                    ver
                                </span>
                            </React.Fragment>
                        }
                        url={url}
                    />
                    {repository && (
                        <a className="data-project__githun" href={repository} target="_blank" rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}>
                            <i className="fab fa-github"></i>
                        </a>
                    )}
                    <div className="data-technologies">
                        {tech.map(item => {
                            return (<i key={item.name} className={item.icon}></i>)
                        })}
                    </div>
                </figcaption>
            </figure>
        )
    }
}

export { ProjectItem }




