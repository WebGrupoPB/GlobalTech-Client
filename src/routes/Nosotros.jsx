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

            <section className='hero-space-2' id="hero-space">
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