import express from "express";
import * as controller from "../../controller/oh_member/editController.js"

const router = express.Router();

router.get("/:id", controller.profile)
router.post("/", controller.edit);
router.post("/upload", controller.upload);

export default router;