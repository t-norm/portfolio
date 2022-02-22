import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button className="m-1" variant="primary" href={props.githubLink} target="_blank">
          <BiLinkExternal /> &nbsp;
          {"View Github"}
        </Button>
        <Button className="m-1" variant="primary" href={props.siteLink} target="_blank">
          <BiLinkExternal /> &nbsp;
          {"View Site"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
