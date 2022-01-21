import React from "react";
import resume from '../assets/Tyler Norman Resume.pdf';

function Resume() {
  return (
    <div>
      <p>Resume</p>
      <iframe width="90%" height="1000px" src={resume} scrolling="no"></iframe>
    </div>
  );
}

export default Resume;