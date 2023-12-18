import express from "express";
// import * as controller from "../../controller/oh_member/userPasswordController.js";
import * as userController from "../../controller/oh_member/userController.js";

const router = express.Router();

router.get("/profile/:mid", userController.getUser);

export default router;