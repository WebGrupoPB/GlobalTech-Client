import React from 'react'
import { Link } from 'react-router-dom';

import Decoradores from '../components/Decoradores';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import CardSection from '../components/CardSection';

import "./styles/Ubicaciones.scss"





const Ubicaciones = () => {


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
                            <button className='btn-filtro'>
                                <div>
                                    <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/GPS-icon.svg" alt="gps-icon" />
                                </div>

                                <span>
                                    <p>Guatemala</p>
                                </span>
                            </button>

                            <button className='btn-filtro'>
                                <div>
                                    <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/GPS-icon.svg" alt="gps-icon" />
                                </div>

                                <span>
                                    <p>Quetzaltenango</p>
                                </span>
                            </button>
                        </div>

                        <span className='textUbi'>                            
                            <i>4 calle 19-29 zona 3 Quetzaltenango, Guatemala</i>    
                        </span>
                    </header>

                    <aside className='googleMaps-mapUbi-space'>

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