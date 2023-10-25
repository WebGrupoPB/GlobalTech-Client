import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Decoradores from '../components/Decoradores';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import CardSection from '../components/CardSection';
import Maps from '../components/Maps';



import "./styles/Ubicaciones.scss"





const Ubicaciones = () => {

    const [guateUbi, setGuateUbi] = useState(true);
    const [xelaUbi, setXelaUbi] = useState(false);


    const toggleContent = (contentNumber) => {
        if (contentNumber === 1) {
            setGuateUbi(true);
            setXelaUbi(false); // Para ocultar otros contenidos si se hace clic
        } else if (contentNumber === 2) {
            setXelaUbi(true);
            setGuateUbi(false); // Para ocultar otros contenidos si se hace clic
        }
    };


    let ubicacionRequerida; // Declara una variable para almacenar el resultado
    let ubicacionText;

    if (guateUbi) {
        ubicacionRequerida = 0; // Asigna 0 a la variable si guateUbi es verdadero
        ubicacionText = "Calz. Atanasio Tzul 20-74, Cdad. de Guatemala 01012"
    } else if (xelaUbi) {
        ubicacionRequerida = 1; // Asigna 1 a la variable si xelaUbi es verdadero
        ubicacionText = "4 calle 19-29 zona 3 Quetzaltenango, Guatemala"
    }

    return (
    <>
        <header className='header-navbar'>
            <Navbar />
        </header>

        <main>

            <Decoradores />  

            <section className='hero-space-2' id="hero-space">
                <div className='hero-banner'>
                    <h1>Ubicaciones</h1>
                </div>
            </section>

            <div className='line-decoration-space'>
                <aside>
                    <div></div>
                </aside>
            </div>

            <section className='mapUbi-section'>
                <div className='mapUbi-space'>
                    <header className='filtro-mapUbi-space'>
                        <div className='btn-filtro-space'>
                            <button className='btn-filtro' onClick={() => toggleContent(1)}>
                                <div>
                                    <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/GPS-icon.svg" alt="gps-icon" />
                                </div>

                                <span>
                                    <p>Guatemala</p>
                                </span>
                            </button>

                            <button className='btn-filtro' onClick={() => toggleContent(2)}>
                                <div>
                                    <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/GPS-icon.svg" alt="gps-icon" />
                                </div>

                                <span>
                                    <p>Quetzaltenango</p>
                                </span>
                            </button>
                        </div>

                        <span className='textUbi'>                            
                            <i>{ubicacionText}</i>    
                        </span>
                    </header>

                    <aside className='googleMaps-mapUbi-space'>
                        <Maps id={ubicacionRequerida} />
                    </aside>
                </div>
                
            </section>

        </main>

        <footer>
          <Footer />
        </footer>
    </>
    );
}


export default Ubicaciones;