import { RequestHandler, Router } from "express";
import { authMiddleware } from "../middleware/AuthMiddleware";
import { addAddress, deleteAddress, getAllAddress, updateAddress } from "../controllers/addressController";

const router = Router()

router.use(authMiddleware as RequestHandler)

router.get('/',getAllAddress)
router.post('/',addAddress)
router.put('/:addressId',updateAddress)
router.delete('/:addressId',deleteAddress)

export default router