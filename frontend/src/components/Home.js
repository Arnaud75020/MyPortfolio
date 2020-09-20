import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
    <div className="home">
        <div>
            <p>Welcome !</p>
            <h4>I’m Arnaud, </h4>
            <h2>Front End Web Developer </h2>
            <h3>based in Lisbon.</h3>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><NavLink to="/projects" className="nav__link">Work</NavLink></li>
                    <li className="nav__item"><NavLink to="/skills" className="nav__link">Skills</NavLink></li>
                    <li className="nav__item"><NavLink to="/contact" className="nav__link">Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    </div>
    )
}

export default Home;