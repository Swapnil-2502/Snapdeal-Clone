import {Router} from 'express';
import { createOrder, verifyPayment } from '../controllers/paymentControllers';


const router = Router();

router.post("/create-order", createOrder)
router.post("/verify-payment", verifyPayment)

export default router