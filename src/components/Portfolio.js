import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "",
    languages: "",
    image: "",
    description: "",
    repo: "",
    live: "",
  }
];

function Portfolio() {
  return (
    <div>
      <p>Portfolio</p>

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;