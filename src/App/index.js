import React from "react";

// import { Header } from '../Components/Header/Header'
import { AboutMe } from '../Components/AboutMe/AboutMe'
import { Data } from '../Data/Data'
import { Projects } from '../Components/Projects/Projects'
import { ProjectItem } from '../Components/ProjectItem/ProjectItem'
import { Contact } from '../Components/Contact/Contact'
import { Modal } from '../Components/Modal/Modal'
import { ProjectModal } from '../Components/ProjectModal/ProjectModal'
 
function App(){
    const [openModal, setOpenModal] = React.useState(false)

    const [dataProject, setDataProject] = React.useState('')

    if(openModal){
        document.body.classList.add('active-modal')
    }else{
        document.body.classList.remove('active-modal')
    }

    

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
                            description = {item.description}
                            openModal = {openModal}
                            setOpenModal = {setOpenModal}
                            setDataProject = {setDataProject}
                        />)
                    })}
                </Projects>

                {openModal && (
                    <Modal
                        setOpenModal = {setOpenModal}
                    >
                        <ProjectModal 
                                nameProject = {dataProject}
                                data = {Data}
                                setOpenModal = {setOpenModal}
                        />
                    </Modal>
                )}

                <Contact/>
            </main>

        </React.Fragment>
    )
}

export default App