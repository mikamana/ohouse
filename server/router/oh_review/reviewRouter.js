import express from "express";
import * as reviewController from "../../controller/oh_review/reviewController.js";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/product', reviewController.createReview);
router.get('/product/count/:pid', reviewController.getReviewCount);
router.get('/product/avg/:pid', reviewController.getReviewAvg);
// router.get('/product/:pid', reviewController.getReview);
// router.get('/product/best/:pid/:startIndex/:endIndex', reviewController.getReviewBest);
// router.get('/product/latest/:pid/:startIndex/:endIndex', reviewController.getReviewLatest);
router.get('/product/:kindList/:pid/:startIndex/:endIndex', reviewController.getReviewPage);
export default router;