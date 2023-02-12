import express from 'express';
import asyncHandler from 'express-async-handler';
import { getAllDives } from '../controllers/dives_Controller.js';

const router = express.Router();

// Register Login
router.get('/dives/:id', asyncHandler(getAllDives));

export default router;
