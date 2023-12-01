import express from "express";
import * as productionController from "../controller/productionController.js";

const router = express.Router();

router.use(express.json())
router.use(express.urlencoded({extended:true}));

router.get('/:pid',productionController.getProduct);

export default router;


