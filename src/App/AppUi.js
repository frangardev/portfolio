import React from "react";
import ReactDOM from "react-dom";

import { Header } from '../Components/Header/Header'
import { AboutMe } from '../Components/AboutMe/AboutMe'


function AppUi(){
    return(
        <React.Fragment>
            {/* <Header/> */}

            <main>
                <AboutMe />
            </main>

        </React.Fragment>
    )
}

export { AppUi }