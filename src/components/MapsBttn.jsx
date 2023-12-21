import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


import "./styles/MapsBttn.scss"





const MapButtons = ({ onLocationChange }) => {

    const [guateUbi, setGuateUbi] = useState(true);
/*     const [xelaUbi, setXelaUbi] = useState(false);
    const [salvadorUbi, setSalvadorUbi] =useState(false);
    const [hondurasUbi, setHondurasUbi] = useState(false);
    const [nicaraguaUbi, setNicaraguaUbi] = useState(false);
    const [costaricaUbi, setCostaricaUbi] = useState(false); */

    const toggleContent = (contentNumber) => {
        if (contentNumber === 1) {
            setGuateUbi(true);

            // Llama a onLocationChange para enviar los datos al componente padre
            onLocationChange({
                ubicacionRequerida: 0,
                ubicacionText: "Calz. Atanasio Tzul 20-11 Zona 12, Guatemala",
        });
        } else if (contentNumber === 2) {
            setGuateUbi(true);

            // Llama a onLocationChange para enviar los datos al componente padre
            onLocationChange({
                ubicacionRequerida: 1,
                ubicacionText: "4 calle 19-29 zona 3 Quetzaltenango, Guatemala",
        });
        } else if (contentNumber === 3) {
            setGuateUbi(false);

            // Llama a onLocationChange para enviar los datos al componente padre
            onLocationChange({
                ubicacionRequerida: 2,
                ubicacionText: "Prolongación Alameda Juan Pablo II, #377 Bodegas San Jorge Sur, Bodega #8, El Salvador",
        });
        } else if (contentNumber === 4) {
            setGuateUbi(false);

            // Llama a onLocationChange para enviar los datos al componente padre
            onLocationChange({
                ubicacionRequerida: 3,
                ubicacionText: "Anillo Periférico Sur Aldea Loarque contiguo a Embotelladora La Reyna, Tegucigalpa, Honduras",
        });
        } else if (contentNumber === 5) {
            setGuateUbi(false);

            // Llama a onLocationChange para enviar los datos al componente padre
            onLocationChange({
                ubicacionRequerida: 4,
                ubicacionText: "Parque Industrial Fernández Sera, Bodega #3. Managua, Nicaragua",
        });
        } else if (contentNumber === 6) {
            setGuateUbi(false);

            // Llama a onLocationChange para enviar los datos al componente padre
            onLocationChange({
                ubicacionRequerida: 5,
                ubicacionText: "Complejo de Bodegas Emanuel Heredia, Costa Rica",
        });
        }      
    };

    return (
        <>
            <div className='btn-filtro-space'>
                
                <button className='btn-filtro btn-11' onClick={() => toggleContent(1)}>
                    <div>
                        <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Ubicaciones/guatemala-flag.png" alt="gps-icon" />
                    </div>

                    <span>
                        <p>Guatemala</p>
                    </span>
                </button>

                <button className='btn-filtro btn-11' onClick={() => toggleContent(3)}>
                    <div>
                        <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Ubicaciones/salvador-flag.png" alt="gps-icon" />
                    </div>

                    <span>
                        <p>El Salvador</p>
                    </span>
                </button>

                <button className='btn-filtro btn-11' onClick={() => toggleContent(4)}>
                    <div>
                        <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Ubicaciones/honduras-flag.png" alt="gps-icon" />
                    </div>

                    <span>
                        <p>Honduras</p>
                    </span>
                </button>

                <button className='btn-filtro btn-11' onClick={() => toggleContent(5)}>
                    <div>
                        <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Ubicaciones/nicaragua-flag.png" alt="gps-icon" />
                    </div>

                    <span>
                        <p>Nicaragua</p>
                    </span>
                </button>

                <button className='btn-filtro btn-11' onClick={() => toggleContent(6)}>
                    <div>
                        <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/Ubicaciones/costarica-flag.png" alt="gps-icon" />
                    </div>

                    <span>
                        <p>Costa Rica</p>
                    </span>
                </button>
                            
            </div>

            {guateUbi ? (
                <div className='btn-filtro-extra'>
                    <button className='btn-filtro btn-11' onClick={() => toggleContent(1)}>
                    <div>
                        <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/GPS-icon.svg" alt="gps-icon" />
                    </div>
                    <span>
                        <p>Cuidad Guatemala</p>
                    </span>
                    </button>
                    <button className='btn-filtro btn-11' onClick={() => toggleContent(2)}>
                    <div>
                        <img src="https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/GPS-icon.svg" alt="gps-icon" />
                    </div>
                    <span>
                        <p>Quetzaltenango</p>
                    </span>
                    </button>
                </div>
                ) : null}
        </>    
    );
}


export default MapButtons;