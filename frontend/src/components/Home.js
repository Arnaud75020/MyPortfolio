import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
    return (
    <div>
        <div>
            <h1>Welcome to the Homepage</h1>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><NavLink to="/work" className="nav__link">Work</NavLink></li>
                    <li className="nav__item"><NavLink to="/skills" className="nav__link">Skills</NavLink></li>
                    <li className="nav__item"><NavLink to="/contact" className="nav__link">Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    </div>
    )
}

export default Home;