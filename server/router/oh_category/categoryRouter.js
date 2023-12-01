import express from "express";
import * as controller from "../../controller/oh_category/categoryController.js";

const router = express.Router();

router.get("/", controller.getCategoryAll)

export default router;