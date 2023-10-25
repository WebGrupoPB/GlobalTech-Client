import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './styles/Navbar.scss';






const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Agregar un efecto para desactivar el menú en pantallas más grandes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    // Agregar un event listener para el cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Agregar un event listener para cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    // Agregar un event listener para el documento principal
    document.addEventListener('mousedown', handleOutsideClick);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className='navbar-space'>
        <div className='background-decoration'></div>
        <nav className="navbar">
            <div className='navlogo-space'>
                <Link to={"/"}>
                  <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/Logo-GlobalTech.svg" alt="nav-logo-global" />
                </Link>
            </div>

            <div className='navlinks-space'>
                <NavLink to={'/'} onClick={scrollToTop}>  
                    Inicio
                </NavLink>

                <NavLink to={'/categorias'} onClick={scrollToTop}>  
                    Categorías
                </NavLink>

                <NavLink to={'/catalogo'} onClick={scrollToTop}>  
                    Catálogo
                </NavLink>

                {/* <NavLink to={'/blog'} onClick={scrollToTop}>  
                    Blog
                </NavLink> */}

                <NavLink to={'/nosotros'} onClick={scrollToTop}>  
                    Nosotros
                </NavLink>

                <NavLink to={'/ubicaciones'} onClick={scrollToTop}>  
                    Ubicaciones
                </NavLink>
            </div>

            <div className='navstore-space'>
                <div className='line-separacion'></div>
                <div className='navprofile-space'>

                </div>

                <div className='navservice-space'>

                <NavLink to={'/empresas'} onClick={scrollToTop}>
                        Empresas 
                </NavLink>

                <NavLink to={'/servicios'} onClick={scrollToTop}>                   
                        Servicios                    
                </NavLink>

                </div>
            </div>
        </nav>
    </header >
    
  );
};

export default Navbar;
