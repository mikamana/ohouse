import express from "express";
import * as controller from "../../controller/oh_member/editController.js"

const router = express.Router();

router.get("/:id", controller.profile);
router.post("/", controller.edit);
router.post("/upload", controller.upload);
router.delete("/Withdrawals/:id", controller.remove);
router.post("/password/password/:id", controller.password);

export default router;