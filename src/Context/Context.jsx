import { createContext, useEffect, useState } from "react"


export const ProductContext = createContext([])


const ProductContextProvider = ({children})=>{
  const [fetching, setfetching] = useState(true)
  const [ProductList, setProductList] = useState([])

  useEffect(() => {
    const Controller = new AbortController()
    const signal = Controller.signal
    console.log('getting data')
    fetch('https://dummyjson.com/products?limit=15', {signal})
    .then(
      res => res.json()
    ).then(
      (obj) => {setProductList(obj)
        setfetching(false)
        console.log(ProductList)
      }
    )
  
    return () => {
      Controller.abort();
    }
  }, [])
  




  return(
    <ProductContext.Provider  value={{fetching, ProductList}}>
      {children}
    </ProductContext.Provider>
  )
}
export default ProductContextProvider


