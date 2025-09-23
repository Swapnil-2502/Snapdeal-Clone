import { Router } from "express";
import { createProduct, deleteProduct, getProductById, getProducts, searchProducts, updateProduct, validateStock } from "../controllers/productController";
import { requireAdmin } from "../middleware/AuthMiddleware";

const route = Router()

route.post("/",requireAdmin,createProduct)
route.post("/validateStock",validateStock)
route.get("/",getProducts)
route.get("/search",searchProducts)
route.get("/:id",getProductById)
route.patch("/:id",updateProduct)
route.delete("/:id",requireAdmin,deleteProduct)

export default route