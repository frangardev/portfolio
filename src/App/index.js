import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { About } from "../pages/About";
import { Error404 } from "../pages/Error404";

import { Loading } from '../Components/Loading/Loading'
 
function App(){
    const [isLoading, setIsLoading] = React.useState(false)
    
    window.onload = ()=>{
        setIsLoading(false)
    }

    return(
        <BrowserRouter>

        {isLoading && (
                    <Loading/>
                )}

        <Routes>
            <Route 
                path='/'
                element={
                    <Home setIsLoading={setIsLoading}/>
                }
            />
            <Route 
                path='/about'
                element={
                    <About />
                }
            />
            <Route 
                path='*'
                element={
                    <Error404 />
                }
            />
            </Routes>
        </BrowserRouter>
    )
}

export default App