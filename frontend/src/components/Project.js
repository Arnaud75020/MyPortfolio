import React from 'react';
import { Link } from "react-router-dom";

const Project = ({project}) => {

    return ( 
        <div className="project-details">
            <div>
                <Link to={`/project/${project.id}`}><img className="project-img" src={project.image} alt={project.title}/></Link>
            </div>
            <div className="container-project-title">
                <h3 className="project-title">{project.title}</h3>
            </div>
            <div className="container-project-description">
                <span>{project.year}</span>
            </div>
    </div> 
     );
}
 
export default Project;