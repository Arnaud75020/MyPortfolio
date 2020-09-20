import React from 'react';
import { Link } from "react-router-dom";
import veganlisbon from "../assets/images/veganlisbon.jpg";

const Projects = ({project}) => {

    console.log(project.image)

    return ( 
        <div className="project-details">
            <div>
                <Link to={`/project/${project.id}`}><img className="project-img" src={veganlisbon} alt={project.title}/></Link>
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
 
export default Projects;