import express from 'express';
import * as channelController from '../controller/channelController.js';

const router = express.Router();

router.get('/', channelController.channelList);

export default router;