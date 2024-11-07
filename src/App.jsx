import React from 'react'
import Home from './Pages/Home'
import ProductContextProvider from './Context/Context'


const App = () => {
  return (
    <ProductContextProvider>
    <Home/>
    </ProductContextProvider>
  )
}

export default App