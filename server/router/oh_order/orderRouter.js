import express from "express";
import * as controller from '../../controller/oh_order/orderController.js'

const router = express.Router();
// router.get("/:mid", controller.getOrder)
router.post("/neworder/:mid", controller.postOrder)

export default router;