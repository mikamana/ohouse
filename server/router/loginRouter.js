import express from "express";
import * as controller from "../controller/loginController.js";

const router = express.Router();

router.post("/", controller.login)

export default router;