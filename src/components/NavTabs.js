import React from 'react';

// Add a comment explaining how we are able to extract the key value pairs from props
// We have our 'props' object destructured so we can reference these values 
// all of the below ternary statements are checking if the given page is active or not. If it is active, the navigation link is styled as Active to indicate where the user is.
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          //  Add a comment explaining what kind of operator this is and what it is checking for
          // this is a ternary operator that is checking if the current page is 'home' or not
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          //  Add a comment explaining what this logic is doing
          //  this is checking if the current page is 'about'
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          //  Add a comment explaining what this logic is doing
          //  this is checking if the current page is 'Portfolio'
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          //  Add a comment explaining what this logic is doing
          //  this is checking if the current page is 'contact'
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          //  Add a comment explaining what this logic is doing
          //  this is checking if the current page is 'contact'
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
