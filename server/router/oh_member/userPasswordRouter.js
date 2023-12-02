import express from "express";
import * as controller from "../../controller/oh_member/userPasswordController.js"

const router = express.Router();

router.post("/", controller.userPasswordNew);
router.post("/email", controller.email);
router.post("/new", controller.newPassword);

export default router;