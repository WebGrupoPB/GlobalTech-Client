import React, { useState, useEffect } from 'react';
import "./styles/Decoradores.scss"



const ChatBubble = () => {
  return (
    <div className='bubbleChat'>
      <div className='squareBubble'>
          <h4>¡Hola!</h4>
          <p>en que puedo ayudarte</p>
      </div>

      <div className='trianguleBubble'></div>
    </div>
  )
}



const Decoradores = () => {
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const chatInterval = setInterval(() => {
      setShowChat((prevShowChat) => !prevShowChat);
    }, 10000); // Cambiar el estado cada 10 segundos

    return () => {
      clearInterval(chatInterval);
    };
  }, []);


  const [isHovered, setIsHovered] = useState(false);

  // Función para manejar el hover
  const handleHover = () => {
    setIsHovered(true);
  };

  // Función para manejar el fin del hover
  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <div>      
        <div className='social-media'>
          {/* <a href="https://www.instagram.com/tangostore.la/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank"><div className='circle-icon'><img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/facebookDecorador.png" alt="instagram"/></div></a> */}
          <a href="https://www.facebook.com/globaltechla" target="_blank"><div className='circle-icon'><img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/facebookDecorador.png" alt="facebook"/></div></a>
          <a href="https://api.whatsapp.com/send?phone=50259464923&text=%C2%A1Hola!,%20vengo%20del%20sitio%20web%20y%20tengo%20algunas%20dudas%20y%20unas%20sugerencias." target="_blank">
            <div
              className={`circle-icon${isHovered ? ' hovered' : ''}`}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/whatsappDecorador.png" alt="whatsapp" className='whatsappIcon' />
          </div> 
          </a>
          {isHovered && <ChatBubble />}
        </div>
    </div>
  );
};

export default Decoradores;