import express from "express";
import * as cartController from "../controller/cartController.js";

const router = express.Router();

router.use(express.json())
router.use(express.urlencoded({extended:true}));

router.post('/new',cartController.createCart);
router.get('/:mid',cartController.getCart);
router.post('/:mid/remove',cartController.removeCart);
router.put('/update/:cart_id/:qty',cartController.updateCart);
export default router;


