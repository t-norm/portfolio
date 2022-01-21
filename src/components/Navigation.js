import React from "react";

function Navigation(props) {
  const navLinks = ["About", "Portfolio", "Contact", "Resume"];
  return (
    <div>
      <ul>
        {navLinks.map((navLink) => (
          <li key={navLink}>
            <a href={`#${navLink.toLowerCase()}`} onClick={() => props.handlePageChange(navLink)}>{navLink}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;