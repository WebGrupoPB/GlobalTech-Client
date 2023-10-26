import React from 'react'
import { Link } from 'react-router-dom';

import Decoradores from '../components/Decoradores';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import CardSection from '../components/CardSection';

import "./styles/Categorias.scss"


const cardInfo = [
    {
        id: 0,
        text: "Aire Comprimido",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Categorias/Cards-Categorias/card-image-0.png",
    },
    {
        id: 1,
        text: "Consumibles",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Categorias/Cards-Categorias/card-image-1.png",
    },
    {
        id: 2,
        text: "Diagnostico",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Categorias/Cards-Categorias/card-image-2.png",
    },
    {
        id: 3,
        text: "Didáctica",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Categorias/Cards-Categorias/card-image-3.png",
    },
    {
        id: 4,
        text: "Elevación",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Categorias/Cards-Categorias/card-image-4.png",
    },
    {
        id: 5,
        text: "Enderezado y Pintura",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Categorias/Cards-Categorias/card-image-5.png",
    },
    {
        id: 6,
        text: "Equipo para bateías",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Categorias/Cards-Categorias/card-image-6.png",
    },
    {
        id: 7,
        text: "Equipo para llantas",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Categorias/Cards-Categorias/card-image-7.png",
    },
    {
        id: 8,
        text: "Herramientas",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Categorias/Cards-Categorias/card-image-8.png",
    },
    {
        id: 9,
        text: "Lubricación y control de fluidos",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Categorias/Cards-Categorias/card-image-9.png",
    },
    {
        id: 10,
        text: "Proyectos",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Categorias/Cards-Categorias/card-image-10.png",
    },
    {
        id: 11,
        text: "Servicios post ventas",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Categorias/Cards-Categorias/card-image-11.png",
    },
]



const Categorias = () => {

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

            <section className='hero-space-2' id="hero-space">
                <div className='hero-banner'>
                    <h1>Categorías</h1>
                </div>
            </section>


            <section className='categorias-section'>
                <CardSection cardInfo={cardInfo} />
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
                        <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Catalogo/image-promociones-catalogo.png" alt="imagen-montacarga" />
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


export default Categorias;