import React from "react";
import { Routes, Route } from "react-router-dom";

import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Params from '../../views/examples/Params'

import './Content.css'

const Content = props => {
    return (
        <main className="Content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/params/:param" element={<Params />} />
                <Route 
                    path="*" 
                    element={
                        <main>
                            <h2>Error 404</h2>
                            <p>Wrong route fella!</p>
                        </main>
                }/>
            </Routes>
        </main>
    )
}

export default Content;