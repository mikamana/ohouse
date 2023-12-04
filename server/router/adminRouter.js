import express from 'express';
import * as controller from "../controller/adminController.js";

const router = express.Router();

router.get('/:startindex/:endindex',controller.getMemberList);

export default router;