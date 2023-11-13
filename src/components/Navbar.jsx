import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';


import './styles/Navbar.scss';




const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const menuIcon = menuOpen ? "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/closeMenu-Icon.svg" : "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/openMenu-.svg"

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
        <nav className="navbar-Desktop">
            <div className='navlogo-space'>
                <Link to={"/"}>
                  <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/Logo-GlobalTech.svg" alt="nav-logo-global" />
                </Link>
            </div>

            <div className='navlinks-space'>
              <NavLink to={'/'} 
                activeClassName="active"
                onClick={scrollToTop}
                > 
                    Inicio
                </NavLink>

                {/* <NavLink to={'/categorias'} activeClassName="active" onClick={scrollToTop}>  
                    Categorías
                </NavLink> */}

                <NavLink to={'/catalogo'} activeClassName="active" onClick={scrollToTop}>  
                    Catálogo
                </NavLink>

                {/* <NavLink to={'/blog'} onClick={scrollToTop}>  
                    Blog
                </NavLink> */}

                <NavLink to={'/nosotros'} activeClassName="active" onClick={scrollToTop}>  
                    Nosotros
                </NavLink>

                <NavLink to={'/ubicaciones'} activeClassName="active"  onClick={scrollToTop}>  
                    Ubicaciones
                </NavLink>
            </div>

            <div className='navstore-space'>
                <div className='line-separacion'></div>
                <div className='navprofile-space'>

                </div>

                <div className='navservice-space'>

                <NavLink to={'/empresas'} activeClassName="active" onClick={scrollToTop} className="btn-11">
                  Nuestras Marcas 
                </NavLink>

                <NavLink to={'/Proyectos'} activeClassName="active" onClick={scrollToTop} className="btn-11">
                    Proyectos                    
                </NavLink>


                </div>
            </div>
        </nav>

        
        <nav className="navbar-Movil">
            <div className='blankSpace-nav'>

            </div>

            <div className='navlogo-space'>
                <Link to={"/"}>
                  <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/Logo-GlobalTech.svg" alt="nav-logo-global" />
                </Link>
            </div>

            <div className='menuIcon-space'>
              
              <img 
                src={menuIcon}
                alt="tuercaIcon" 
                onClick={toggleMenu} />

            </div>

            {menuOpen && (
              <aside className='menuMovil-space'>
                <div className='navlinks-space'>
                  <NavLink to={'/'} 
                    activeClassName="active"
                    onClick={scrollToTop}
                    > 
                        Inicio
                    </NavLink>

                    {/* <NavLink to={'/categorias'} activeClassName="active" onClick={scrollToTop}>  
                        Categorías
                    </NavLink> */}

                    <NavLink to={'/catalogo'} activeClassName="active" onClick={scrollToTop}>  
                        Catálogo
                    </NavLink>

                    {/* <NavLink to={'/blog'} onClick={scrollToTop}>  
                        Blog
                    </NavLink> */}

                    <NavLink to={'/nosotros'} activeClassName="active" onClick={scrollToTop}>  
                        Nosotros
                    </NavLink>

                    <NavLink to={'/ubicaciones'} activeClassName="active"  onClick={scrollToTop}>  
                        Ubicaciones
                    </NavLink>
                </div>

                <div className='navstore-space'>
                    <div className='line-separacion'></div>
                    <div className='navprofile-space'>

                    </div>

                    <div className='navservice-space'>

                    <NavLink to={'/empresas'} activeClassName="active" onClick={scrollToTop} className="btn-11">
                        Marcas
                    </NavLink>

                    <NavLink to={'/proyectos'} activeClassName="active" onClick={scrollToTop} className="btn-11">
                        Proyectos                   
                    </NavLink>


                    </div>
                </div>
              </aside>
            )}
            
        </nav>
    </header >
    
  );
};

export default Navbar;
