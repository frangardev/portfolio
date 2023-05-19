import React, { useEffect } from "react";

import { Data } from '../Data/Data'

import { Header } from '../Components/Header/Header'
import { AboutMe } from '../Components/AboutMe/AboutMe'
import { Contact } from '../Components/Contact/Contact'
import { Projects } from '../Components/Projects/Projects'
import { ProjectItem } from '../Components/ProjectItem/ProjectItem'
import { NavbarHome } from '../Components/Navbar/NavbarHome'

import { Modal } from '../Components/Modal/Modal'
import { ProjectModal } from '../Components/ProjectModal/ProjectModal'

function Home() {
    const [openModal, setOpenModal] = React.useState(false)
    const [dataProject, setDataProject] = React.useState('')

    if (openModal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const imgs = document.querySelectorAll('.ImageProject')
    // const loadingImage = imgs.length >= Data.length
    const loadingImage = true

    return (
        <React.Fragment>
            <Header>
                <NavbarHome
                    modal={openModal}
                />
            </Header>

            <main>
                <AboutMe />

                <Projects>
                    {Data.map(item => {
                        return (<ProjectItem
                            key={item.name}
                            name={item.name}
                            image={item.image}
                            url={item.url}
                            repository={item.repository}
                            tech={item.tech}
                            description={item.description}
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                            setDataProject={setDataProject}
                            loadingImage={loadingImage}
                        />)
                    })}
                </Projects>

                {openModal && (
                    <Modal
                        setOpenModal={setOpenModal}
                    >
                        <ProjectModal
                            nameProject={dataProject}
                            data={Data}
                            setOpenModal={setOpenModal}
                        />
                    </Modal>
                )}

                <Contact />
            </main>

        </React.Fragment>
    )
}

export { Home }