import express from "express";
import * as inquiryController from "../../controller/oh_inquiry/inquiryController.js";

const router = express.Router();

router.use(express.json())
router.use(express.urlencoded({ extended: true }));

router.post('/', inquiryController.createInquiry);
router.get('/:mid/:pid/:startIndex/:endIndex', inquiryController.getInquiry);
router.get('/:pid/:startIndex/:endIndex', inquiryController.getBeforeInquiry);
router.get('/:pid', inquiryController.getAllInquiry);
router.delete("/", inquiryController.removeInquiry);
router.put("/", inquiryController.updateInquiry);

export default router;

