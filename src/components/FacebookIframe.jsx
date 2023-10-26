import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const facebookPageGlobalUrl = 'https://www.facebook.com/globaltechla';

const facebookWidth =   window.innerWidth > 1999 ? "500" : 
                        window.innerWidth > 1400 ? "300" : 
                        window.innerWidth > 1000 ? "260" : 
                        window.innerWidth > 950 ? "230" :
                        window.innerWidth > 600 ? "200" :
                        window.innerWidth > 320 ? "200" : "200";

const facebookHeight =  window.innerWidth > 1999 ? "800" : 
                        window.innerWidth > 1440 ? "550" : 
                        window.innerWidth > 1024 ? "500" : 
                        window.innerWidth > 950 ? "400" :
                        window.innerWidth > 600 ? "400" :
                        window.innerWidth > 320 ? "400" : "400";



const Facebook = () => {



    return (
    <>  
       <div
            key="uniqueKey"
            className="fb-page"
            data-href={facebookPageGlobalUrl}
            data-tabs="timeline"
            data-width={facebookWidth + "px"}
            data-height={facebookHeight + "px"}
            data-small-header="true"
            data-adapt-container-width="false"
            data-hide-cover="false"
            data-show-facepile="false"
            >
            <blockquote cite={facebookPageGlobalUrl} className="fb-xfbml-parse-ignore">
                <a href={facebookPageGlobalUrl}>Hyper Car Wash</a>
            </blockquote>
        </div>
    </>
    );
}


export default Facebook;