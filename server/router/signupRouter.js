import express from "express";
import * as controller from "../controller/signupController.js"

const router = express.Router();

router.post("/email", controller.emailCheck)
router.post("/", controller.signup)
router.post("/nickname", controller.nicknameCheck)

export default router;