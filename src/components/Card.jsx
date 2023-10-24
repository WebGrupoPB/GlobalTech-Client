import React from 'react'
import { Link } from 'react-router-dom';

import Decoradores from '../components/Decoradores';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';

import "./styles/Card.scss"





const Card = ({id, text, image}) => {


    return (
        <Link to={"/catalogo"} target="__blank" className='Card-section'>
            <aside className='image-card-space'>
                <img src={image} alt="card-image" />
            </aside>

            <article className='text-card-space'>
                <h1>{text}</h1>
            </article>
        </Link>
    );
}


export default Card;