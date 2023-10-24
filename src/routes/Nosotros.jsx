import React from 'react'
import { Link } from 'react-router-dom';

import Decoradores from '../components/Decoradores';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import CardSection from '../components/CardSection';

import "./styles/Nosotros.scss"


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



const Nosotros = () => {


    return (
    <>
        <header className='header-navbar'>
            <Navbar />
        </header>

        <main>

            <Decoradores />  

            <section className='hero-space-2' id="hero-space">
                <div className='hero-banner'>
                    <h1>Nosotros</h1>
                </div>
            </section>

            <div className='line-decoration-space'>
                <div></div>
            </div>

            <section className='quienesSomos-section'> 
                <div className='quienesSomos-space'>
                    <article className='articulo-space'>
                        <h1>¿Quienes somos?</h1>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget quam nec velit commodo tristique. Vivamus accumsan odio auctor tortor pulvinar, a dignissim turpis interdum. Duis tristique dui non magna viverra, id sollicitudin lorem feugiat. Fusce a efficitur urna. Aliquam volutpat, justo nec malesuada interdum, justo tortor luctus velit, eget tempus metus enim sed libero. Suspendisse potenti. Sed in dignissim justo. Nullam dictum fermentum volutpat. Integer eu lacus eu nulla malesuada rhoncus. Nulla facilisi.</p>
                    </article>

                    <aside className='imagen-space'>
                        <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Nosotros/nosotros-img1.png" alt="imagen-quienesSomos" />
                    </aside>
                </div>               
            </section>

            <section className='historia-section'>
                <div className='historia-space'>
                    <article className='articulo-space'>
                        <h1>Historia</h1>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget quam nec velit commodo tristique. Vivamus accumsan odio auctor tortor pulvinar, a dignissim turpis interdum. Duis tristique dui non magna viverra, id sollicitudin lorem feugiat. Fusce a efficitur urna. Aliquam volutpat, justo nec malesuada interdum, justo tortor luctus velit, eget tempus metus enim sed libero. Suspendisse potenti. Sed in dignissim justo. Nullam dictum fermentum volutpat. Integer eu lacus eu nulla malesuada rhoncus. Nulla facilisi.
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