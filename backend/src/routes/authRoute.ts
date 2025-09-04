import {Router} from 'express'
import { checkEmail, registerUser, verifyOTP } from '../controllers/authController'

const router = Router()

router.post('/check-email',checkEmail)
router.post('/register',registerUser)
router.post('/verifyotp',verifyOTP)


export default router