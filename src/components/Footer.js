import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="mt-2 bg-dark footer d-flex justify-content-center">
      <div className="m-auto">
        <a href="https://github.com/t-norm?tab=repositories" target="_blank" className="p-1"><FontAwesomeIcon icon={faGithubSquare} size="3x" /></a>
        <a href="https://www.linkedin.com/in/tyler-norman-952a9a219/" target="_blank" className="p-1"><FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
        <a href="https://www.instagram.com/tentacle_lad/" target="_blank" className="p-1"><FontAwesomeIcon icon={faInstagramSquare} size="3x" /></a>
      </div>
    </footer>
  );
}

export default Footer;