import { useEffect, useState } from "react"
import { LeftFilters } from "./LeftFilters"
import { RightProducts } from "./RightProducts"
import axios from "../../../api/axios"
import { type ProductData } from "../../../types/types"
import { useProductFilters } from "../../../contexts/ProductFilterContext"
import { ProductTopBar } from "./ProductTopBar"



export const ListProduct = () => {

  const {filters,searchKeyword} = useProductFilters()

  const [products, setProducts] = useState<ProductData[]>([])

  useEffect(() => {
    const fetchProducts = async () => {

      try{
        let res

        if(searchKeyword && searchKeyword.trim() !== ""){
            const encoded = encodeURIComponent(searchKeyword)
            res = await axios.get(`/product/search?q=${encoded}`,{params: filters})
            setProducts(res.data.products)
        }
        else{
            res = await axios.get('/product',{params: filters})
            setProducts(res.data.products)
        }
      }
      catch(error){
        console.error("Error fetching products:", error);
      }
        
    }

    fetchProducts()
  },[filters,searchKeyword])

  

  return (
    <>
      <ProductTopBar product={products[0]} />
      <div className="col-xs-24 reset-padding" style={{marginBottom:'50px'}}>
        <LeftFilters />
        <RightProducts products ={products} />
      </div>
    </>
  )
}
