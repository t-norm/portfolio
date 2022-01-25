import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

function Project(props) {
  return (
    <div className="row d-flex justify-content-center">
      {props.projects.map((project) => (
        <div className="card w-25 m-2 shadow">
          <div>
            <a href={project.live} target="_blank">
              <img className="w-100 d-flex justify-content-center pt-2" src={process.env.PUBLIC_URL + project.image} alt="project image" />
            </a>
          </div>

          <div>
            <div>
              <p key={project.id} className="card-title">{project.title}</p>
            </div>
          </div>

          <div>
            {project.description}
            <div className="border-top">
              Made with: {project.tech}
            </div>
            <div className="d-flex justify-content-center">
              <a href={project.repo} target="_blank" className="m-3"><FontAwesomeIcon icon={faGithubSquare} size="3x" /></a>
              <a href={project.live} target="_blank" className="m-3"><FontAwesomeIcon icon={faGlobeAmericas} size="3x" /></a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;