import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { About } from "../pages/About";
import { Error404 } from "../pages/Error404";
 
function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route 
                    path='/'
                    element={
                        <Home />
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