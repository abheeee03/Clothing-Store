import React from 'react'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import ProductContextProvider from './Context/Context'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Supplier from './Pages/Supplier'

const App = () => {




  return (
    <ProductContextProvider>
    <Home/>
    </ProductContextProvider>
  )
}

export default App