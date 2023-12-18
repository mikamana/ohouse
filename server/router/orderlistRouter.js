import express from 'express';
import * as controller from "../controller/orderlistController.js";

const router = express();

router.get('/order/:id/:sortList', controller.getOrder);
router.get('/:id', controller.getOrderList);

export default router;