import React from 'react'
import { Link } from 'react-router-dom';

import Decoradores from '../components/Decoradores';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';

import "./styles/Catalogo.scss"





const Catalogo = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
                    <h1>Catálogo</h1>
                </div>
            </section>

            <section className='catalogo-section'>
                <aside className='catalogo-space'>


                    <div style={{ position: 'relative', paddingTop: 'max(60%, 0px)', height: "0%", width: '100%' }}>
                        <iframe
                            allow="clipboard-write"
                            sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
                            allowFullScreen={true}
                            style={{
                            position: 'absolute',
                            border: 'none',
                            width: '100%',
                            height: '100%',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            backgroundColor: '#CDD1D4' // Cambia el color de fondo aquí
                            }}
                            src="https://e.issuu.com/embed.html?d=cata_logo_global_tech&u=mercadeo-gpb"                      
                        >
                        </iframe>

                    </div>
                </aside>
            </section>

            <section className='baner-promocion3'>
                <div className='promocion3-space'>
                    <div className='promocion3-textcontent-space'>
                        <div className='promocion3-titlecontent'>
                            <h1>MÁQUINA DE INTERCAMBIO DE ACEITE</h1>
                        </div>
                        

                        <div className='promocion3-textcontent'>
                            <div>
                            <p>-  Display LCD para fácil manejo</p>
                            <p>-  Llenado automático del aceite de transmisión</p>
                            <p>-  Función de limpieza automática</p>
                            <p>-  Base de datos</p>
                            <p>-  Depósito de detergente</p>
                            </div>
                            
                            <Link to={"/catalogo"} onClick={scrollToTop} className="btn-11">
                                <span>Comprar</span>
                            </Link>
                        </div>
                    </div>

                    <div className='promocion3-imagecontent-space'>
                        <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Catalogo/imagen-promociones-catalogo.png" alt="imagen-montacarga" />
                    </div>
                </div>
            </section>

        </main>

        <footer>
          <Footer />
        </footer>
    </>
    );
}


export default Catalogo;
