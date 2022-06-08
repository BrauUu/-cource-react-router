import React from "react";
import { Routes, Route } from "react-router-dom";

import About from '../../views/examples/About'
import Home from '../../views/examples/Home'

import './Content.css'

const Content = props => {
    return (
        <main className="Content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
            </Routes>
        </main>
    )
}

export default Content;