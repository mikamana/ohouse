import express from "express";
import * as controller from "../../controller/oh_product/productController.js";

const router = express.Router();

router.get("/shopitem", controller.getShopitem)
router.get("/bestitem", controller.getBestitem)
router.get("/bestitem/:category_id", controller.getCategoryList)
export default router;