import express from 'express';
import asyncHandler from 'express-async-handler';
import { getAllDives, getSingleDive, addDive } from '../controllers/dives_Controller.js';

const router = express.Router();

// Register Login
router.get('/dives/:id', asyncHandler(getAllDives));
router.get('/getDiveInfo/:u_ID/:d_ID', asyncHandler(getSingleDive));

router.post('/addDive/:id', asyncHandler(addDive));

export default router;
