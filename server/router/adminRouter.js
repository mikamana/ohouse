import express from 'express';
import * as controller from "../controller/adminController.js";

const router = express.Router();

router.get('/',controller.getMemberList);

export default router;