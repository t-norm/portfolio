import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import pawgers from "../../assets/Projects/pawgers.png";
import stream from "../../assets/Projects/streamability.png";
import typingGame from "../../assets/Projects/typeplusplus.png";
import socialAPI from "../../assets/Projects/socialAPI.png";
import food from "../../assets/Projects/food.png";
import weather from "../../assets/Projects/weather.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Showcasing My <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={typingGame}
              isBlog={false}
              title="Type++"
              description="Typing Game - Stonecap project of coding certificate via The University of Utah."
              githubLink="https://github.com/t-norm/type-Plus-Plus"
              siteLink="https://typeplusplus.herokuapp.com/"
            />
          </Col>          
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stream}
              isBlog={false}
              title="Streamability"
              description="One-stop-shop for movie/TV streaming availability."
              githubLink="https://github.com/Thenlie/Streamability"
              siteLink="https://streamability.herokuapp.com/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pawgers}
              isBlog={false}
              title="Pawgers"
              description="Social network for dog posting and adoption."
              githubLink="https://github.com/Thesselonian/Pawgers"
              siteLink="https://pawgers.herokuapp.com/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialAPI}
              isBlog={false}
              title="No SQL Social Network API"
              description="Example API layer for use in social networks; made with MongoDB, REST API."
              githubLink="https://github.com/t-norm/NoSQL-Social-Network-API"
              siteLink="https://github.com/t-norm/NoSQL-Social-Network-API"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food Festival"
              description="Ficticious food festival site made to showcase skill with web pack, chrome dev tools, and knowledge in PWAs."
              githubLink="https://github.com/t-norm/food-festival"
              siteLink="https://t-norm.github.io/food-festival/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Dash"
              description="Weather dashboard that supports world-wide city searches"
              githubLink="https://github.com/t-norm/weather-dashboard"
              siteLink="https://t-norm.github.io/weather-dashboard/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
