import React from "react";
import portrait from "../assets/headshot.png";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <div className="w-75 m-auto border-start border-end border-2 row about-shadow mt-5 bg-light">
      <div className="d-flex justify-content-center">
        <img src={portrait} alt="Tyler Norman" className="m-auto mt-5 mb-5 portrait" />
      </div>
      <p className="w-75 m-auto lead my-text">
        Hello, and welcome! I am a Full Stack Developer and long time leader. I have experience with the MERN (MongoDB, Express.js, React, Node.js) stack and multiple years of experience in management of people, leaders, and projects.
        I've gratuated from The University of Utah's Full Stack Dev. coding bootcamp and invite you to browse my works, download my resume, and contact me with any job offers.
      </p><br></br>
      <p className="w-75 m-auto pt-5 pb-5 lead fancy">
        <u>Thank you for visiting!</u>
        <FontAwesomeIcon icon={faThumbsUp} size="2x" />
      </p>
    </div>
  );
}

export default About;