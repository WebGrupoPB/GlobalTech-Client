import React from 'react'
import Decoradores from '../components/Decoradores';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import CardSection from '../components/CardSection';


import "./styles/Error.scss"


const Error = () => {

    return (
        <>
            <header className='header-navbar'>
                <Navbar />
            </header>

            <main>

                <Decoradores />  

                <section className="img-error-space">
                    <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/errorPage-img.png" alt="img-error" className='img-error' />
                </section>

            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
}


export default Error;