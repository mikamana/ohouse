import express from "express";
import * as controller from "../../controller/oh_scrap/scrapController.js";

const router = express.Router();

router.post("/product", controller.createScrap);
router.delete("/product", controller.removeScrap);
router.get("/product/:pid/:mid", controller.getCheckScrap);
router.get("/prdcount/:pid", controller.getPrdScrapCount)
export default router;