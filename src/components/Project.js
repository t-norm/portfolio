import React from "react";

function Project(props) {
  return (
    <div>
      {props.projects.map((project) => (
        <div>
          <div>
            <div>
              <p key={project.id}>{project.title}</p>
            </div>
          </div>

          <div>
            <a href={project.live} target="_blank">
              <img src={process.env.PUBLIC_URL + project.image} alt="project image" />
            </a>
          </div>

          <div>
            {project.description}
            <div>
              Languages: {project.languages}
            </div>
            <div>
              <small>
                <a href={project.repo} target="_blank">Github</a>
                <a href={project.live} target="_blank">Live Site</a>
              </small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;