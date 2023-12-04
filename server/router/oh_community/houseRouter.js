import express from "express";
import * as houseController from "../../controller/houseController.js";
const router = express.Router();

router.use(express.json())
router.use(express.urlencoded({ extended: true }));

router.get('/', houseController.getHouse);
router.get('/first', houseController.getSortFirstHouse);
router.get('/last', houseController.getSortLastHouse);
// router.get('/collections', houseController.getCollection);

export default router;


