import React from 'react';
import skills from '../data/skills.json';

function Skills() {

    const tech = skills[0].technology[0] 
    const type = skills[0].type[0] 


    return (
        <div>
            <h1>Welcome to my Skills Page</h1>
            <p>Here I rate myself how comfortable I feel with a technology</p>
            <div className="container-skills">
                <div className="container-skills-technology">
                    <ul>
                        {Object.keys(tech).map(skill => 
                            <li>{skill +": "+tech[skill]}</li>)}
                    </ul>
                </div>
                <div className="container-skills-type">
                    <ul>
                        {Object.keys(type).map(skill => 
                            <li>{skill +": "+type[skill]}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;