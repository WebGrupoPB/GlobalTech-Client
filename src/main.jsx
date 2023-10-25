import React from 'react'
import Home from './routes/Home.jsx'
import Error from './routes/Error.jsx'
import Catalogo from './routes/Catalogo.jsx'
import Categorias from './routes/Categorias.jsx'
import Nosotros from './routes/Nosotros.jsx'
import Servicios from './routes/Servicios.jsx'
import Ubicaciones from './routes/Ubicaciones.jsx'

import './index.css'

import * as ReactDOM from "react-dom/client";
import {
   createBrowserRouter,
   RouterProvider,
 } from "react-router-dom";


 
 const router = createBrowserRouter([
   {
     path: "/",
     element: <Home />,
     errorElement: <Error />,
   },
   {
    path: "/catalogo",
    element: <Catalogo />,
  },
  {
    path: "/categorias",
    element: <Categorias />,
  },
  {
    path: "/nosotros",
    element: <Nosotros />,
  },
  {
    path: "/ubicaciones",
    element: <Ubicaciones />,
  },
  {
    path: "/servicios",
    element: <Servicios />,
  },

 ]); 

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   <React.StrictMode>
     <RouterProvider router={router} />
   </React.StrictMode>
 );
