import React from 'react';
import projects from '../data/projects.json';

const ProjectDetails = (props) => {

    const projectId = props.match.params.id
    const project = projects.find(p => p.id === Number(projectId))

    console.log(project)

    return ( 
    <div className="projectdetails-details">
        <div>
            <img className="projectdetails-img" src={project.image} alt={project.title}/>
        </div>
        <div className="container-projectdetails-title">
            <h3 className="projectdetails-title">{project.title}</h3>
            <p>{project.context}</p>
            <p>{project.description}</p>
        </div>
        <div className="container-projectdetails-url">
            <a className="projectdetails-url" href={project.url} target="_blank"/>
            <a className="projectdetails-repo" href={project.repo} target="_blank"/>
        </div>
        <div className="container-projectdetails-description">
            <p>This was {project.context} made in {project.year} during {project.timing}</p>
        </div>
        <div className="container-projectdetails-technology-tag">
            <span className={project.technology.html ? "technology-tag" : ""}>{project.technology.html ? "HTML5" : null}</span>
            <span className={project.technology.css ? "technology-tag" : ""}>{project.technology.css ? "CSS3" : null}</span>
            <span className={project.technology.javascript ? "technology-tag" : ""}>{project.technology.javascript ? "JS" : null}</span>
            <span className={project.technology.react ? "technology-tag" : ""}>{project.technology.react ? "REACT JS" : null}</span>
            <span className={project.technology.node ? "technology-tag" : ""}>{project.technology.node ? "NODE JS" : null}</span>
        </div>
        <div className="container-projectdetails-type-tag">
                <span className={project.type.frontend ? "type-tag" : ""}>{project.type.frontend ? "FrontEnd" : null}</span>
                <span className={project.type.backend ? "type-tag" : ""}>{project.type.backend ? "BackEnd" : null}</span>
                <span className={project.type.fullstack ? "type-tag" : ""}>{project.type.fullstack ? "Full Stack" : null}</span>
            </div>
    </div> 
    );
}
 
export default ProjectDetails;