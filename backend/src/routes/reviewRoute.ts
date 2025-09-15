import { Router} from 'express'
import { authMiddleware } from '../middleware/AuthMiddleware'
import { createReview, deleteReview, getReviews, updateReview } from '../controllers/reviewController'

const router = Router()

// router.use(authMiddleware as RequestHandler)

router.get("/:productId",getReviews)
router.post("/:productId",authMiddleware,createReview)
router.patch("/:productId/:reviewId",authMiddleware,updateReview)
router.delete("/:productId/:reviewId",authMiddleware,deleteReview)

export default router