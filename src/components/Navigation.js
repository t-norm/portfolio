import React from "react";

function Navigation(props) {
  const navLinks = ["About", "Portfolio", "Contact", "Resume"];
  return (
    <div>
      <ul className="row">
        {navLinks.map((navLink) => (
          <li key={navLink} className="d-flex col-3">
            <a className="header" href={`#${navLink.toLowerCase()}`} onClick={() => props.handlePageChange(navLink)}>{navLink}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;