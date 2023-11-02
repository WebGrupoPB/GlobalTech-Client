import React from 'react'
import { Link } from 'react-router-dom';

import Decoradores from '../components/Decoradores';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import CardSection from '../components/CardSection';

import "./styles/Nosotros.scss"



const Nosotros = () => {


    return (
    <>
        <header className='header-navbar'>
            <Navbar />
        </header>

        <main>

            <Decoradores />  

            <section className='hero-space-2-categorias' id="hero-space">
                <div className='hero-banner'>
                    <h1>Nosotros</h1>
                </div>
            </section>

            <div className='line-decoration-space'>
                <aside>
                    <div></div>
                </aside>
            </div>

            <section className='quienesSomos-section'> 
                <div className='quienesSomos-space'>
                    <article className='articulo-space'>
                        <h1>Visión</h1>

                        <p>
                            En Global Tech, nos comprometemos a no solo entender, sino anticipar y superar las necesidades 
                            de nuestros clientes, siempre entregando soluciones de alta calidad de manera eficiente y 
                            oportuna. 
                        </p>
                        <p>
                            Esto lo logramos gracias a nuestro equipo altamente capacitado, 
                            cuyo enfoque principal es aplicar la excelencia en todos los aspectos de nuestro trabajo. 
                        </p>
                        <p>     
                            Con un compromiso inquebrantable, un profundo conocimiento en nuestro sector y la 
                            distribución de las mejores herramientas y recursos, estamos listos para llevar a 
                            cabo una experiencia sin igual para nuestros clientes en cada paso del camino.
                        </p>
                    </article>

                    <aside className='imagen-space'>
                        <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Nosotros/nosotros-img1.png" alt="imagen-quienesSomos" />
                    </aside>
                </div>               
            </section>

            <section className='historia-section'>
                <div className='historia-space'>
                    <article className='articulo-space'>
                        <h1>Misión</h1>

                        <p>
                            En Global Tech, nuestra misión es superar constantemente las expectativas de 
                            nuestros clientes al entender y satisfacer sus necesidades de manera ágil y 
                            eficiente. 
                        </p>

                        <p>
                            Lo logramos proporcionando soluciones adecuadas en tiempo real a través 
                            de un equipo altamente capacitado y profesional. 
                        </p>
                        <p>     
                            Nos comprometemos a inspirar la 
                            calidad en todos los aspectos de nuestro trabajo, combinando responsabilidad y 
                            experiencia en la distribución de equipos y herramientas de última tecnología. 
                        </p>
                    </article>

                    <aside className='imagen-space'>
                        <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Nosotros/nosotros-img2.png" alt="imagen-quienesSomos" />
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


export default Nosotros;