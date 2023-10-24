import React from 'react'
import { Link } from 'react-router-dom';

import Decoradores from './Decoradores';
import Navbar from './Navbar';
import Slider from './Slider';
import Footer from './Footer';
import Card from './Card';

import "./styles/CardSection.scss"




const CardSection = ({cardInfo}) => {


    return (
        <section className='Cards-section'>
            <div className='Cards-space'>
                {cardInfo.map((card) => (
                    <Card key={card.id} text={card.text} image={card.imageURL} />
                ))}
            </div>
        </section>
    );
}


export default CardSection;