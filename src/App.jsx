import React from 'react'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import ProductContextProvider from './Context/Context'
import Login from './Pages/Login'

const App = () => {




  return (
    <ProductContextProvider>
    {/* <Home/> */}
    <Login/>
    </ProductContextProvider>
  )
}

export default App