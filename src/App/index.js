import React from "react";

// import { Header } from '../Components/Header/Header'
import { AboutMe } from '../Components/AboutMe/AboutMe'
import { Data } from '../Data/Data'
import { Projects } from '../Components/Projects/Projects'
import { ProjectItem } from '../Components/ProjectItem/ProjectItem'

 
function App(){
    // const itemProject = []
    // Data.map(item => {
    //         itemProject = <ProjectItem
    //             key={item.name}
    //             name = {item.name}
    //             image = {item.image}
    //             url = {item.url}
    //             repository = {item.repository}
    //             description = {item.description}
    //             tech = {item.tech}
    //         />
    // }) 
    console.log(Data[2].image);
    return(
        <React.Fragment>
            {/* <Header/> */}

            <main>
                <AboutMe />

                <Projects>
                    {Data.map(item =>{
                        return (<ProjectItem
                            key={item.name}
                            name = {item.name}
                            image = {item.image}
                            url = {item.url}
                            repository = {item.repository}
                            description = {item.description}
                            tech = {item.tech}
                        />)
                    })}
                </Projects>

                {/* <Contact/> */}
            </main>

        </React.Fragment>
    )
}

export default App