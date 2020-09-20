import React from 'react';
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return ( 
        <div className="navbar">
            <div className="navbar-sub-container">
                <Link to="/home" className="nav-link"><p className="navbar-logo">Arnaud Duhé</p></Link>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item"><NavLink to="/projects" className="nav-link">Work</NavLink></li>
                        <li className="nav-item"><NavLink to="/skills" className="nav-link">Skills</NavLink></li>
                        <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
                        <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
     );
}
 
export default NavBar;