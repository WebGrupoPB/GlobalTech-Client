import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './styles/Footer.scss';






const Footer = () => {
  

  return (
    <footer className='Footer-Section'>
        <div className='footer-space'>
            <div>
                <p>Redes Sociales</p>

                <aside>
                    <Link to={"https://www.facebook.com/globaltechla"} target='__blank'>
                        <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/Facebook+Circled.png" alt="facebook-icon" />
                    </Link>
                    <Link to={"#"} target='__blank'>
                        <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/Instagram+Circle.png" alt="instagram-icon" />
                    </Link>
                    <Link to={"#"} target='__blank'>
                    <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/LinkedIn.png" alt="linkedin-icon" />
                    </Link>
                </aside>
            </div>

            <div>
                <p>
                    Todos los derechos reservados ©GLOBALTECH 2023
                </p>
            </div>

            <div>               
            </div>
        </div>
    </footer>
  );
};

export default Footer;