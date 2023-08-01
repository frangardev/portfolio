import React, { useState } from "react";
import { Button } from "../Button/Button";
import { SkeletonProject } from "../SkeletonProject/SkeletonProject.js";
import { Icon } from '@iconify/react';
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
    if (name.length > 15) {
        cutName = cutName.substring(0, 15) + '...'
    }
    const seeProject = () => {
        if (!openModal) {
            isHover(false)
            setDataProject(name)
            setOpenModal(true)
        }
    }

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
                className={`ProjectItem ${hover && 'ProjectItem--hover'}`}
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
                   
                    <div className="data-technologies">
                        {tech.map(item => {
                            // return (<Icon icon={item.icon} key={item.name} className={item.icon}/>)
                            return (<Icon icon={item.icon} key={item.name} />)
                            // return (<p key={item.name}>{item.name}</p>)
                        })}
                    </div>
                </figcaption>
            </figure>
        )
    }
}

export { ProjectItem }




