import React from 'react'
import { Link } from 'react-router-dom';

import Decoradores from '../components/Decoradores';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import Facebook from '../components/FacebookIframe';

import "./styles/Home.scss"


const dataHero = [
    {
      id: 0,
      img: 'https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Home/Slider1/slider-heroHome1.png',
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
                  <p>-  Ancho total : 3.23 mt</p>
                  <p>-  Longitud total : 5.69 mt</p>
                  <p>-  Altura de columnas : 2.24 mt</p>
                  <p>-  Altura máxima : 1.78 mt</p>
                  <p>-  Ancho entre columnas : 2.97 mt</p>
                </div>
                
                <Link to={"/catalogo"} onClick={scrollToTop} className="btn-11">
                  <span>Comprar</span>
                </Link>
              </div>
            </div>

            <div className='promocion1-imagecontent-space'>
              <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Home/image-promociones1.png" alt="imagen-montacarga" />
            </div>
          </div>
        </section>

        <section className='baner-promocion2'>
          <div className='promocion2-space'>
            <div className='promocion2-textcontent-space'>
              <div className='promocion2-titlecontent'>
                <h1>Todo lo que necesitas para tu taller</h1>
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
            
            <Link to={"/ubicaciones"} onClick={scrollToTop} target='__blank' className='overlay-ubicaciones' >

              <div className='text-container'>
                <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/GPS-icon.svg" alt="gps-icon" />

                <h1>ENCUENTRA TU <span className='span-ubi'>CENTRO DE VENTA</span></h1>

                <p>
                Selecciona tu <span className='span-ubi'>ubicación</span> y filtra tu <span className='span-ubi'>centro de venta</span> más cercana
                de acuerdo a tus necesidades.
                </p>
              </div>

              <div className='maps-icons'>
                <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/googleMaps.svg" alt="google-maps-icon" />
                <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/waze-icon.svg" alt="waze-icon" />
              </div>

            </Link>
          </section>

          <section className='contacto-section' id='contacto'>
                    <div className='contacto-area'>
                        <aside className='contactanos-space'>
                          <div className='contactonos-div'>
                              <div className='contact-title-space'>
                                  <h1>Contactanos</h1>
                              </div>

                              <div className='contact-form-space'>
                                  <form className='formDiv' action="">
                                      <input name='name' type="text" placeholder='nombre' />
                                      <input name='email' type='email' placeholder='correo' />
                                      <textarea name="message" id="" cols="30" rows="10" placeholder=' mensaje'></textarea>
                                      <button type='submit' className="btn-11">Enviar</button>
                                  </form>
                              </div>
                          </div> 

                          <div className='comentarios-space'>
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
                            
                            <Facebook />
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
