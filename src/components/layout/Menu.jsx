import React from "react";

import { Link } from 'react-router-dom'

import './Menu.css'

const Menu = props => {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/params/someParam">Parâmetros</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Menu;