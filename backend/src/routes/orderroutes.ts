import { RequestHandler, Router } from "express";
import { authMiddleware } from "../middleware/AuthMiddleware";
import { createUserOrder, getUserOrderById, getUserOrders } from "../controllers/orderController";

const router = Router()

router.use(authMiddleware as RequestHandler)

router.post('/', createUserOrder)
router.get('/', getUserOrders)
router.get('/:orderId', getUserOrderById)

export default router
