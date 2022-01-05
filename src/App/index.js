import React from "react";

// import { Header } from '../Components/Header/Header'
import { AboutMe } from '../Components/AboutMe/AboutMe'
import { Data } from '../Data/Data'
import { Projects } from '../Components/Projects/Projects'
import { ProjectItem } from '../Components/ProjectItem/ProjectItem'
import { Contact } from '../Components/Contact/Contact'

 
function App(){

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
                            tech = {item.tech}
                        />)
                    })}
                </Projects>

                <Contact/>
            </main>

        </React.Fragment>
    )
}

export default App