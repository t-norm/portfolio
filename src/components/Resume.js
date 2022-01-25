import React from "react";
import resume from '../assets/Resume.pdf';

function Resume() {
  return (
    <div className="bg-light">
      <iframe width="100%" height="760px" src={resume} ></iframe>
    </div>
  );
}

export default Resume;