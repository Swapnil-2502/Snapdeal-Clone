import { Router } from "express";
import { authMiddleware } from "../middleware/AuthMiddleware";
import { createUserOrder, getAllOrders, getOrderById, getUserOrderById, getUserOrders, updateOrderDetails } from "../controllers/orderController";

const router = Router()

router.get('/allorders',getAllOrders)
router.get('/orderbyId/:orderId',getOrderById)
router.post('/', authMiddleware,createUserOrder)
router.patch('/:orderId',updateOrderDetails)
router.get('/', authMiddleware,getUserOrders)
router.get('/:orderId', authMiddleware,getUserOrderById)

export default router
