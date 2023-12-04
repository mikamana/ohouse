import express from "express";
import * as uploadController from "../controller/uploadController.js";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/review", uploadController.upload);


export default router;