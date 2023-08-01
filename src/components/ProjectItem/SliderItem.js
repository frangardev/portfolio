import React from 'react'
import { Button } from "../Button/Button";
import { SkeletonProject } from "../SkeletonProject/SkeletonProject.js";
import { Icon } from '@iconify/react';
import './ProjectItem.css'

function SliderItem({
    name,
    image,
    url,
    repository,
    tech,
    hover,
    loadingImage,
    seeProject,
    cutName,
    isHover
}) {

    const [translateImageValue, setTranslateImageValue] = React.useState(0)

    let delayAnim = Math.random() * 2

    setTimeout((() => {
        if (translateImageValue >= (image?.length - 1) * 100) {
            setTranslateImageValue(0)
        } else {
            setTranslateImageValue(translateImageValue + 100)
        }
    }), 5000)


    return (
        <figure
            className={`ProjectItem project__slider ${hover && 'ProjectItem--hover'}`}
            onMouseEnter={() => isHover(true)}
            onMouseLeave={() => isHover(false)}
            onClick={seeProject}
        >

            {!loadingImage && (<SkeletonProject type='loading-item-project' />)}
            <div
                className="container__image--slider"
                style={{
                    transform: `translateX(-${translateImageValue}%)`,
                    transitionDelay: `${delayAnim}s`
                }}
            >
                {image.map(item => (
                    <img
                        key={item}
                        className={`ImageProject ${loadingImage && 'loaded'}`}
                        // loading="lazy" 
                        src={item}
                        alt={name}
                    />
                ))}
            </div>
            <figcaption className={`data-project ${hover && 'hover__item'}`}>
                <h4 className="data-project__name">{cutName}</h4>
                
                <div className="data-technologies">
                    {tech.map(item => {
                        return (<Icon icon={item.icon} key={item.name} />)
                        // return (<p key={item.name}>{item.name}</p>)
                    })}
                </div>
            </figcaption>
        </figure>
    )
}

export default SliderItem