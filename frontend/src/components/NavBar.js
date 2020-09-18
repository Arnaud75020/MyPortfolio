import React from 'react';
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return ( 
        <div>
            <div>
                <h2 className="logo"><NavLink to="/home" className="nav__link">Arnaud Duhé</NavLink></h2>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item"><NavLink to="/work" className="nav__link">Work</NavLink></li>
                        <li className="nav__item"><NavLink to="/skills" className="nav__link">Skills</NavLink></li>
                        <li className="nav__item"><NavLink to="/about" className="nav__link">About</NavLink></li>
                        <li className="nav__item"><NavLink to="/contact" className="nav__link">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
     );
}
 
export default NavBar;