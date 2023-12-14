import express from "express";
import * as controller from "../../controller/oh_scrap/scrapController.js";

const router = express.Router();

router.post("/product", controller.createScrap)
router.get("/product/:pid", controller.getCheckScrap)
export default router;