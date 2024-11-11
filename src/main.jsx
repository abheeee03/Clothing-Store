import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import Supplier from './Pages/Supplier.jsx'
import MensClothing from './Pages/MensClothing.jsx'
import WomensClothing from './Pages/WomensClothing.jsx'
import KidsClothing from './Pages/KidsClothing.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },{
    path: '*',
    element: <ErrorPage/>
  },
  {
    path: '/Login',
    element: <Login/>
  },
  {
    path: '/Register',
    element: <Register/>
  },
  {
    path: '/BecomeSupplier',
    element: <Supplier/>
  },
  {
    path: '/Mens',
    element: <MensClothing/>
  },
  {
    path: '/Womens',
    element: <WomensClothing/>
  },
  {
    path: '/Kids',
    element: <KidsClothing/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
