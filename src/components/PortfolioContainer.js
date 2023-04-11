import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // Add a comment describing what we are passing as props */}
      {/* this div contains the navtabs component and the attributes are passed as props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // Add a comment explaining what is happening on the following line */}
      {/* we're rendering the page? Compiling everything it was passed */}
      {renderPage()}
    </div>
  );
}
