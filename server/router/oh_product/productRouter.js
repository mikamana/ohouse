import express from "express";
import * as controller from "../../controller/oh_product/productController.js";

const router = express.Router();

router.get("/shopitem", controller.getTodayDeal)
router.get("/popular/:page", controller.getPopular)
router.get("/bestitem", controller.getBestitem)
router.get("/bestitem/:category_id", controller.getCategoryList)
router.get("/todaydeals/:page", controller.getInfiniteItem)
export default router;