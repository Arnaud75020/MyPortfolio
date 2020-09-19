import React from 'react';
import skills from '../data/skills.json';

function Skills() {

    const tech = skills[0].technology

    return (
        <div>
            <h1>Welcome to my Skills Page</h1>
            <p>Here I rate myself how comfortable I feel with a technology</p>
            <div className="container-skills">
                <div className="container-skills-type">
                    <ul>
                        <li>{tech.map(skill => `${Object.keys(skill)}: ${Object.values(skill)}`)}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;