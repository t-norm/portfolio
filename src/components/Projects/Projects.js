import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import pawgers from "../../assets/Projects/pawgers.png";
import stream from "../../assets/Projects/streamability.png";
import blog from "../../assets/Projects/blog.png";
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
              imgPath={pawgers}
              isBlog={false}
              title="Pawgers"
              description="Social network for dog posting and adoption."
              link="https://github.com/Thesselonian/Pawgers"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stream}
              isBlog={false}
              title="Streamability"
              description="One-stop-shop for movie/TV streaming availability."
              link="https://github.com/Thenlie/Streamability"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Just Tech News"
              description="Tech blog made with Handlebars, MVC."
              link="https://github.com/t-norm/just-tech-news"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialAPI}
              isBlog={false}
              title="No SQL Social Network API"
              description="Example API layer for use in social networks; made with MongoDB, REST API."
              link="https://github.com/t-norm/NoSQL-Social-Network-API"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food Festival"
              description="Ficticious food festival site made to showcase skill with web pack, chrome dev tools, and knowledge in PWAs."
              link="https://github.com/t-norm/food-festival"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Dash"
              description="Weather dashboard that supports world-wide city searches"
              link="https://github.com/t-norm/weather-dashboard"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
