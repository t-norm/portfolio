import React from "react";

function Resume() {
  return (
    <div>
        <p>Resume</p>

        <a href={process.env.PUBLIC_URL + "resume.pdf"}>
          <span>Download My Resume</span>
        </a>
    </div>
  );
}

export default Resume;