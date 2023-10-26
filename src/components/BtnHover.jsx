import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';


import './styles/BtnHover.scss';


const BtnHover = () => {
    const [hoverPosition, setHoverPosition] = useState({ top: 0, left: 0 });
  
    const handleMouseEnter = (e) => {
      const parentOffset = e.currentTarget.getBoundingClientRect();
      const relX = e.clientX - parentOffset.left;
      const relY = e.clientY - parentOffset.top;
      setHoverPosition({ top: relY, left: relX });
    };
  
    const handleMouseLeave = () => {
      setHoverPosition({ top: 0, left: 0 });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  
    return (
      <NavLink
        to={'#'}
        onClick={scrollToTop}
        className="btn-11"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Empresas
        <span style={{ top: hoverPosition.top, left: hoverPosition.left }}></span>
      </NavLink>
    );
  };

  export default BtnHover;