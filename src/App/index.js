import React from "react";

// import { Header } from '../Components/Header/Header'
import { AboutMe } from '../Components/AboutMe/AboutMe'
import { Data } from '../Data/Data'
import { Projects } from '../Components/Projects/Projects'
import { ProjectItem } from '../Components/ProjectItem/ProjectItem'
import { Contact } from '../Components/Contact/Contact'
import {Modal} from '../Components/Modal/Modal'

 
function App(){
    const [openModal, setOpenModal] = React.useState(false)

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
                            openModal = {openModal}
                            setOpenModal = {setOpenModal}
                        />)
                    })}
                </Projects>

                {openModal && (
                    <Modal
                        setOpenModal = {setOpenModal}
                    >
                        {/* <ProjectModal 
                                name ={name} 
                                image ={image}
                                url ={url}
                                repository ={repository}                
                                tech ={tech} 
                        /> */}
                        <h1>HOLLLLLAAAAA desde el MODAL!!!!</h1>
                    </Modal>
                )}

                <Contact/>
            </main>

        </React.Fragment>
    )
}

export default App