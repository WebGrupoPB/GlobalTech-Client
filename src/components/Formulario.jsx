import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export const API_SERVER = 'https://iqe7dlsbq0.execute-api.us-east-1.amazonaws.com/prod-tango';


import "./styles/Card.scss"


const Formulario = () => {

    const initialFormData = {
        name: '',
        email: '',
        message: '',
      };
    
      const [formData, setFormData] = useState(initialFormData);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch(API_SERVER + '/enviar-comentario-globaltech', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            console.log('Comentario enviado con éxito');
            setFormData(initialFormData);
            setIsSubmitted(true);
    
            // Resetear el mensaje después de unos segundos (puedes ajustar el tiempo según tus preferencias)
            setTimeout(() => {
              setIsSubmitted(false);
            }, 10000);
          } else {
            console.error('Error al enviar comentario');
            setIsSubmitted(true);
            setFormData(initialFormData);

            setTimeout(() => {
                setIsSubmitted(false);
              }, 10000);
          }
        } catch (error) {
          console.error('Error al enviar comentario', error);
          setIsSubmitted(true);
          setFormData(initialFormData);

          setTimeout(() => {
            setIsSubmitted(false);
          }, 10000);
        }
      };
    

    const [isSubmitted, setIsSubmitted] = useState(false);  
    const buttonText = isSubmitted ? 'Enviado' : 'Enviar';

    return (
        <form className='formDiv' onSubmit={handleSubmit}>
                  <input
                    name='name'
                    type='text'
                    placeholder='nombre'
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    name='email'
                    type='email'
                    placeholder='correo'
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <textarea
                    name='message'
                    cols='30'
                    rows='10'
                    placeholder=' mensaje'
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <button type='submit' className="btn-11">
                    {buttonText}
                  </button>
                </form>
    );
}


export default Formulario;