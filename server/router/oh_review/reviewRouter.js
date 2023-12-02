import express from "express";
import * as reviewController from "../../controller/oh_review/reviewController.js";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/:pid', reviewController.getReview);
router.post('/product', reviewController.createReview);
export default router;