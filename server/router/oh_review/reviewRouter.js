import express from "express";
import * as reviewController from "../../controller/oh_review/reviewController.js";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/product/all', reviewController.getReview)
router.post('/product', reviewController.createReview);
router.put('/product', reviewController.updateReview);
router.get('/product/count/:pid', reviewController.getReviewCount);
router.get('/product/avg/:pid', reviewController.getReviewAvg);
router.get('/product/:kindList/:pid/:startIndex/:endIndex', reviewController.getBeforeReviewPage);
router.get('/product/:kindList/:mid/:pid/:startIndex/:endIndex', reviewController.getReviewPage);
router.delete('/product', reviewController.removeReview);
export default router;