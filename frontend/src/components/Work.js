import React from 'react';
import Projects from './Projects';
import projects from '../data/projects.json';


function Work() {

    return (
        <div>
            <h1>Welcome to my Work Page</h1>
            <ul className="project-list">
                {projects.map(project => {
                    return <Projects 
                    {...project}
                    key={project.id}
                    project={project}
                />})}
            </ul>
        </div>
    )
}

export default Work;