import React, { useState } from 'react';
import Navigation from "./Navigation";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function Header() {
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;

      case "Portfolio":
        return <Portfolio />;

      case "Contact":
        return <Contact />;

      case "Resume":
        return <Resume />;
        
      default:
        return <About />;
    }
  };

  return (
    <div>
      <nav className='d-flex justify-content-center my-text bg-dark'>
        <a href="https://t-norm.github.io/portfolio/" className='header'><span>Tyler Norman</span></a>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </nav>


      <main>
        <div className='about-bg'>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;