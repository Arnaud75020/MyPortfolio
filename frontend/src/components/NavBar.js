import React from 'react';
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return ( 
        <div>
            <div>
                <Link to="/home" className="nav-link"><h2 className="logo">Arnaud Duhé</h2></Link>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item"><NavLink to="/project" className="nav-link">Work</NavLink></li>
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