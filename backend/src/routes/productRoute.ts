import { Router } from "express";
import { createProduct, deleteProduct, getProductById, getProducts, searchProducts, updateProduct } from "../controllers/productController";
import { requireAdmin } from "../middleware/AuthMiddleware";

const route = Router()

route.post("/",requireAdmin,createProduct)
route.get("/",getProducts)
route.get("/search",searchProducts)
route.get("/:id",getProductById)
route.patch("/:id",updateProduct)
route.delete("/:id",requireAdmin,deleteProduct)

export default route