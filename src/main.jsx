import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import { HelmetProvider } from 'react-helmet-async'
import Authprovider from './Componets/Authprovider/Authprovider.jsx'
import  { Toaster } from 'react-hot-toast';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HelmetProvider>
     <Authprovider>
     <RouterProvider router={router} />
     <Toaster />
     </Authprovider>
  </HelmetProvider>
  </React.StrictMode>,
)
