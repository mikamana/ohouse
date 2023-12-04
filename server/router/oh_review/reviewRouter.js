import express from "express";
import * as reviewController from "../../controller/oh_review/reviewController.js";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/product/:pid', reviewController.getReview);
router.get('/product/count/:pid', reviewController.getReviewCount);
router.get('/product/avg/:pid', reviewController.getReviewAvg);
router.get('/product/best/:pid/:startIndex/:endIndex', reviewController.getReviewBest);
router.get('/product/latest/:pid/:startIndex/:endIndex', reviewController.getReviewLatest);
router.get('/product/:pid/:startIndex/:endIndex', reviewController.getReviewPage)
router.post('/product', reviewController.createReview);
export default router;