import React from "react";
import portrait from "../assets/portfolioPortrait.png";
import "./style.css";

function About() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <img src={portrait} alt="Tyler Norman" className="m-auto w-25 mb-5" />
      </div>
      <p className="w-75 m-auto lead my-text">
        Hello, and welcome! I am a Full Stack Developer and long time leader. I have experience with the MERN (MongoDB, Express.js, React, Node.js) stack and multiple years of experience in management of people, leaders, and projects.
        I've gratuated from The University of Utah's Full Stack Dev. coding bootcamp and invite you to browse my works, download my resume, and contact me with any job offers.
      </p><br></br>
      <p className="w-75 m-auto lead fancy"><u>
        Thank you for visiting!
      </u></p>
    </div>
  );
}

export default About;