import { useEffect, useState } from "react"
import type { ProductData } from "../../types/types"
import axios from "../../api/axios"
import { ProductTop } from "./ProductDetail/ProductTop"
import { useParams } from "react-router-dom"
import { ProductBottom } from "./ProductDetail/ProductBottom"

export const ProductDetail = () => {
    const {productId} = useParams<{productId: string}>();
    const [product, setProduct] = useState<ProductData | null>(null)

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get(`/product/${productId}`)
            setProduct(res.data.product)
        }

        fetchProducts()
    },[])

  return (
    <>
        <ProductTop product = {product} />
        <ProductBottom product= {product} />
    </>
  )
}
