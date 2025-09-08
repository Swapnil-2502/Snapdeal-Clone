import { Router } from "express";
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from "../controllers/productController";

const route = Router()

route.post("/",createProduct)
route.get("/",getProducts)
route.get("/:id",getProductById)
route.patch("/:id",updateProduct)
route.delete("/:id",deleteProduct)

export default route