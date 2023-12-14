import express from "express";
import * as controller from '../../controller/oh_pay/payController.js'

const router = express.Router();
router.post("/:mid", controller.postPay)

export default router;