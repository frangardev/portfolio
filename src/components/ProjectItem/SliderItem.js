import React from 'react'
import { Button } from "../Button/Button";
import { SkeletonProject } from "../SkeletonProject/SkeletonProject.js";
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
            className="ProjectItem project__slider"
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

export default SliderItem