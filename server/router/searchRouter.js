import express from 'express';
import * as searchController from '../controller/searchController.js';

const router = express.Router();

router.get('/:searchKeyword', searchController.searchList);

export default router;