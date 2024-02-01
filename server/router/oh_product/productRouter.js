import express from "express";
import * as controller from "../../controller/oh_product/productController.js";

const router = express.Router();

router.get("/shopitem", controller.getTodayDeal)
router.get("/popular/:page", controller.getPopular)
router.get("/bestitem", controller.getBestitem)
router.get("/bestitem/:category_id", controller.getCategoryList)
router.get("/todaydeals/:page", controller.getInfiniteItem)
router.get("/ranks/:best", controller.getRanksItem)
router.get("/ranks/category/:category_id", controller.getCategoryRankItem)
export default router;