import React from 'react'
import { Link } from 'react-router-dom';


import "./styles/Card.scss"





const Card = ({id, text, image, category, linkTo}) => {

    const cardClassName = `Card-section${category ? `-for${category}` : ''}`;

    return (
        <Link to={linkTo} target="_blank" className={cardClassName}>
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