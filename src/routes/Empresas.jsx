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
        text: "LAUNCH",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Empresas/logosEmpresas-Global/launch-logo.jpeg",
        link: "https://cnlaunchlatin.com/",
    },
    {
        id: 1,
        text: "SmartSafe",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Empresas/logosEmpresas-Global/SmartSafe-logo.png",
        link: "https://smartsafeuae.com/",
    }, 
    {
        id: 2,
        text: "QRED",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Empresas/logosEmpresas-Global/Qred-logo.png",
    },
    {
        id: 3,
        text: "HYVA",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Empresas/logosEmpresas-Global/Hyva-logo.png",
        link: "https://www.hyva.com/es-es/",
    },
    /* {
        id: 4,
        text: "THINKCAR",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Empresas/logosEmpresas-Global/thinkcar-logo.png",
    }, */
    {
        id: 5,
        text: "ALEMITE",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Empresas/logosEmpresas-Global/alemite-logo.svg",
        link: "https://www.skf.com/alemite",
    },
    {
        id: 6,
        text: "PIUSI",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Empresas/logosEmpresas-Global/piusi-logo.png",
    },
    {
        id: 7,
        text: "USIMECA",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Empresas/logosEmpresas-Global/Usimeca_Logo.jpg",
    },
    {
        id: 8,
        text: "JALTEST",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Empresas/logosEmpresas-Global/jaltest-logo.svg",
    },
    {
        id: 9,
        text: "MANATEC",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Empresas/logosEmpresas-Global/Manatec-Logo.png",
        link: "https://manatec.in/",
    },
    {
        id: 10,
        text: "COMEC",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Empresas/logosEmpresas-Global/comec-logo.png",
    },
    {
        id: 11,
        text: "MIDTRONICS",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Empresas/logosEmpresas-Global/Midtronics-logo.png",
    },
    {
        id: 12,
        text: "GAHO",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Empresas/logosEmpresas-Global/gaho-logo.jpeg",
        link: "http://www.gahousa.com/",
    },
    {
        id: 13,
        text: "OTC",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Empresas/logosEmpresas-Global/OTC-logo.png",
    },
    {
        id: 14,
        text: "MARTECH",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Empresas/logosEmpresas-Global/martech-logo.jpg",
        link: "https://martechcorporation.com/es/",
    },
    {
        id: 15,
        text: "BENDPAK",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Empresas/logosEmpresas-Global/bendpak-logo.jpeg",
    },
    {
        id: 16,
        text: "SCHUMACHER",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Empresas/logosEmpresas-Global/Schumacher-logo.png",
    },
    {
        id: 17,
        text: "RJW",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Empresas/logosEmpresas-Global/RJW-logo.png",
        link: "https://www.rjwest.ca/",
    },
    {
        id: 18,
        text: "RAVAGLIOLI",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Empresas/logosEmpresas-Global/Ravaglioli-logo.webp",
    },
    {
        id: 19,
        text: "CP",
        imageURL: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Empresas/logosEmpresas-Global/CP-logo.jpeg",
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
                    <h1>Distribuidores</h1>
                </div>
            </section>

            {/* <div className='line-decoration-space'>
                <aside>
                    <div></div>
                </aside>
            </div> */}

            <section className='servicios-section'>
                <CardSection cardInfo={cardInfo2} category={"Empresas"}/>
            </section>

        </main>

        <footer>
          <Footer />
        </footer>
    </>
    );
}


export default Empresas;