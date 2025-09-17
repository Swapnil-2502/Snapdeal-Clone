import { useEffect, useState } from "react"
import { LeftFilters } from "./LeftFilters"
import { RightProducts } from "./RightProducts"
import axios from "../../../api/axios"
import { type ProductData, type ProductFilter } from "../../../types/types"



export const ListProduct = () => {
  const [filters, setFilters] = useState<ProductFilter>({
        type: "Shirts",
        color: "",
        minPrice: 100,
        maxPrice: 10000
  });

  const [products, setProducts] = useState<ProductData[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
        const res = await axios.get('/product',{params: filters})
        setProducts(res.data.products)
    }

    fetchProducts()
  },[filters])

  return (
    <>
      <div className="col-xs-24 reset-padding" style={{marginBottom:'50px', marginTop:'50px'}}>
        <LeftFilters filters={filters} setFilters={setFilters} />
        <RightProducts products ={products} />
      </div>
    </>
  )
}
