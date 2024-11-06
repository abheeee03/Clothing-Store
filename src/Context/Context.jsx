import { createContext, useEffect } from "react"


export const ProductContext = createContext([])


const ProductContextProvider = ({children})=>{

  let ProductList = []

  useEffect(() => {
    const Controller = new AbortController()
    const signal = Controller.signal
    console.log('getting data')
    fetch('https://dummyjson.com/products?limit=15', {signal})
    .then(
      res => res.json()
    ).then(
      (obj) => {ProductList = obj
        console.log(ProductList)
      }
    )
  
    return () => {
      Controller.abort();
    }
  }, [])
  





  const productarr = [{
    Title: 'IPhone 16 Pro Max',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium alias perferendis corrupti recusandae? Nemo mollitia aliquam sint eveniet ducimus!',
    Price: 150000
  }]


  return(
    <ProductContext.Provider  value={{productarr}}>
      {children}
    </ProductContext.Provider>
  )
}
export default ProductContextProvider


