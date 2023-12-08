import express from "express";
import * as inquiryController from "../../controller/oh_inquiry/inquiryController.js";

const router = express.Router();

router.use(express.json())
router.use(express.urlencoded({extended:true}));

router.post('/',inquiryController.createInquiry);
router.get('/:pid/:startIndex/:endIndex',inquiryController.getInquiry);

export default router;

