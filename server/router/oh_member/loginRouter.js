import express from "express";
import * as controller from "../../controller/oh_member/loginController.js";

const router = express.Router();

router.post("/", controller.login)

export default router;