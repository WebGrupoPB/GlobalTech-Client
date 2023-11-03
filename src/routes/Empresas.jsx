import React from 'react'
import { Link } from 'react-router-dom';

import Decoradores from '../components/Decoradores';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import CardSection from '../components/CardSection';

import "./styles/Empresas.scss"


const cardInfo2 = [
    {
        id: 0,
        text: "Instalaciones",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Categorias/Cards-Categorias/card-image-0.png",
    },
    {
        id: 1,
        text: "Capacitaciones",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Categorias/Cards-Categorias/card-image-1.png",
    },
    {
        id: 2,
        text: "Proyectos",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Categorias/Cards-Categorias/card-image-2.png",
    },
    {
        id: 3,
        text: "Servicios post ventas",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Categorias/Cards-Categorias/card-image-3.png",
    },
    
]



const Empresas = () => {


    return (
    <>
        <header className='header-navbar'>
            <Navbar />
        </header>

        <main>

            <Decoradores />  

            <section className='hero-space-2-categorias' id="hero-space">
                <div className='hero-banner'>
                    <h1>Empresas</h1>
                </div>
            </section>

            <div className='line-decoration-space2'>
                <aside>
                    <div></div>
                </aside>
            </div>

            <section className='servicios-section'>
                <CardSection cardInfo={cardInfo2} />
            </section>

        </main>

        <footer>
          <Footer />
        </footer>
    </>
    );
}


export default Empresas;