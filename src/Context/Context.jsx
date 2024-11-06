import { createContext, useEffect, useState } from "react"


export const ProductContext = createContext([])


const ProductContextProvider = ({children})=>{
  const [fetching, setfetching] = useState(true)
  const [ProductList, setProductList] = useState([])

  useEffect(() => {
    const Controller = new AbortController()
    const signal = Controller.signal
    fetch('https://dummyjson.com/products/category/mens-shirts', {signal})
    .then(
      res => res.json()
    ).then(
      (obj) => {setProductList(obj)
        setfetching(false)
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


