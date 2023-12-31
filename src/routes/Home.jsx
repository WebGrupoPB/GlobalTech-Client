import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import Decoradores from '../components/Decoradores';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import Facebook from '../components/FacebookIframe';
import Formulario from '../components/Formulario';

import "./styles/Home.scss"


const dataHero = [
    {
      id: 0,
      img: 'https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Home/Slider1/slider-heroHome1.png',
    },
    {
      id: 0,
      img: 'https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Home/Slider1/slider-heroHome2.png',
    },
    {
      id: 0,
      img: 'https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Home/Slider1/slider-heroHome3.png',
    },
  ];



const Home = () => {

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

        <section className='hero-space' id="hero-space">
            <div className='hero-slider'>

              <Slider dataSlider={dataHero} panelInfo='heroHome' />

            </div>
        </section>

        <section className='baner-promocion1'>
          <div className='promocion1-space'>
            <div className='promocion1-textcontent-space'>
              <div className='promocion1-titlecontent'>
                <h1>ELEVADOR 4 POSTES ALINEACIÓN</h1>
              </div>
              

              <div className='promocion1-textcontent'>
                <div>
                  <p>-  CAPACIDAD : 9000 lb</p>
                  <p>-  ALTURA MAX : 1.90 m</p>
                  <p>-  ALIMENTACIÓN : 220 V</p>
                  <p>-  PESO DE EMPAQUE : 1290 kg</p>
                  
                </div>
                
                <Link to={"/catalogo"} onClick={scrollToTop} className="btn-11">
                  <span>Comprar</span>
                </Link>
              </div>
            </div>

            <div className='promocion1-imagecontent-space'>
              <img src="https://eyf5gqdcwsg.exactdn.com/wp-content/uploads/2020/07/TLT_445_W.png?lossy=0&quality=92&webp=90&ssl=1" alt="imagen-montacarga" />
            </div>
          </div>
        </section>

        <section className='baner-promocion2'>
          <div className='promocion2-space'>
            <div className='promocion2-textcontent-space'>
              <div className='promocion2-titlecontent'>
                <h1>Soluciones integrales para tu taller</h1>
              </div>
              

              <div className='promocion2-textcontent'> 
                <Link to={"/catalogo"} onClick={scrollToTop} className="btn-11">
                  <span>ver catálogo</span>
                </Link>
              </div>
            </div>

            <div className='promocion2-imagecontent-space'>
              <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Home/image-promociones2.png" alt="imagen-montacarga" />
            </div>
          </div>
        </section>

        <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/separador-global.png" alt="separador-global" className='separador-global' id='about'/>


        <section className='ubicaciones-section'>
            
            <Link to={"/ubicaciones"} onClick={scrollToTop} className='overlay-ubicaciones' >

              <div className='text-container'>
                <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/GPS-icon.svg" alt="gps-icon" />

                <h1>ENCUENTRA TU <span className='span-ubi'>CENTRO DE VENTA</span></h1>

                <p>
                Selecciona tu <span className='span-ubi'>ubicación</span> y filtra tu <span className='span-ubi'>centro de venta</span> más cercano
                de acuerdo a tus necesidades.
                </p>
              </div>

              <div className='maps-icons'>
                <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/googleMaps.svg" alt="google-maps-icon" />
                <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/waze-icon.svg" alt="waze-icon" />
              </div>

            </Link>
          </section>

          <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/separador-global.png" alt="separador-global" className='separador-global' id='about'/>

          <section className='contacto-section' id='contacto'>
                    <div className='contacto-area'>
                        <aside className='contactanos-space'>
                          <div className='contactonos-div'>
                              <div className='contact-title-space'>
                                  <h1>Contactanos</h1>
                              </div>

                              <div className='contact-form-space'>
                                  <Formulario />
                              </div>
                          </div> 

                          <div className='comentarios-space'>
                            <aside className='comentario-card'>
                              <header>
                                <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Home/profile-comentarios.png" alt="profile-img" />
                              </header>

                              
                                <article>
                                  <div>
                                    <span>@Manuel García </span>
                                    
                                    <p>
                                      Excelente lugar para encontrar todo lo que necesito para mi empresa. 
                                      ¡Gracias por la atención personalizada!
                                    </p>
                                  </div>                                  
                                </article>
                              
                            </aside>

                            <aside className='comentario-card'>
                              <header>
                                <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Home/profile-comentarios.png" alt="profile-img" />
                              </header>

                              
                                <article>
                                  <div>
                                    <span>@Juan Carlos Gómez </span>
                                    
                                    <p>
                                      Los precios son muy competitivos, y la calidad de los productos es insuperable. 
                                      ¡Totalmente recomendado!
                                    </p>
                                  </div>                                  
                                </article>
                              
                            </aside>

                            <aside className='comentario-card'>
                              <header>
                                <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Home/profile-comentarios.png" alt="profile-img" />
                              </header>

                              
                              <article>
                                <div>
                                  <span>@Luis Ernesto Rodas </span>

                                  <p>
                                    Sus productos son de excelente 
                                    calidad y el servicio al cliente que
                                    ofrecen es muy bueno
                                  </p>
                                </div>                                  
                              </article>
                              
                            </aside>
                          </div>      
                        </aside>

                        <aside className='facebook-space'>
                            <div>
                                <h1>Facebook</h1>
                            </div>

                            <Link to={"https://www.facebook.com/globaltechla"} target='_blank'>
                              <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Home/facebook-img.png" alt="facebook-img" />
                            </Link>
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


export default Home;
