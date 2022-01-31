import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello world, my name is <span className="purple">Tyler Norman </span>
            from <span className="purple"> Salt Lake City, Utah.</span>
            <br />I am a MERN stack engineer.
            <br />
            <br />
            Apart from coding, some other hobbies I have are...
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Drone Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading about True CrimeI
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."{" "}
          </p>
          <footer className="blockquote-footer">Martin Fowler</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
