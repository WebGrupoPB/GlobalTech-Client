import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

const images = [
  {
    id: 0,
    original: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Proyectos/proyecto-img1.png",
    thumbnail: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Proyectos/proyecto-img1.png",
  },
  {
    id: 1,
    original: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Proyectos/proyecto-img2.png",
    thumbnail: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Proyectos/proyecto-img2.png",
  },
  {
    id: 2,
    original: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Proyectos/proyecto-img3.png",
    thumbnail: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Proyectos/proyecto-img3.png",
  },
  {
    id: 3,
    original: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Proyectos/proyecto-img4.png",
    thumbnail: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Proyectos/proyecto-img4.png",
  },
  {
    id: 4,
    original: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Proyectos/proyecto-img5.png",
    thumbnail: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Proyectos/proyecto-img5.png",
  },
  {
    id: 5,
    original: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Proyectos/proyecto-img6.png",
    thumbnail: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Proyectos/proyecto-img6.png",
  },
  {
    id: 6,
    original: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Proyectos/proyecto-img7.png",
    thumbnail: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Proyectos/proyecto-img7.png",
  },
  {
    id: 7,
    original: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Proyectos/proyecto-img8.png",
    thumbnail: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Proyectos/proyecto-img8.png",
  },
  {
    id: 8,
    original: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Proyectos/proyecto-img9.png",
    thumbnail: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Proyectos/proyecto-img9.png",
  },
  {
    id: 9,
    original: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Proyectos/proyecto-img10.png",
    thumbnail: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Proyectos/proyecto-img10.png",
  },
  {
    id: 10,
    original: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Proyectos/proyecto-img11.png",
    thumbnail: "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Proyectos/proyecto-img11.png",
  },
  
];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default MyGallery;