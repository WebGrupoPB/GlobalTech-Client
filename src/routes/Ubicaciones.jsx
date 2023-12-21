import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Decoradores from '../components/Decoradores';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import CardSection from '../components/CardSection';
import Maps from '../components/Maps';
import MapButtons from '../components/MapsBttn';


import "./styles/Ubicaciones.scss"





const Ubicaciones = () => {
    const [currentLocation, setCurrentLocation] = useState({
        ubicacionRequerida: 0,
        ubicacionText: "Calz. Atanasio Tzul 20-11 Zona 12, Guatemala",
        ubicacionPhone: "PBX: (+502) 2247-3333",
      });
    
      const handleLocationChange = (locationData) => {
        setCurrentLocation(locationData);
      };

    return (
    <>
        <header className='header-navbar'>
            <Navbar />
        </header>

        <main>

            <Decoradores />  

            <section className='hero-space-2-categorias' id="hero-space">
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
                                            
                            <MapButtons onLocationChange={handleLocationChange}/>

                        <span className='textUbi'> 
                                                      
                            <i>{currentLocation.ubicacionText}</i>  
                            <i> - {currentLocation.ubicacionPhone}</i> 

                        </span>
                    </header>

                    <aside className='googleMaps-mapUbi-space'>

                        <Maps id={currentLocation.ubicacionRequerida} />
                        
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