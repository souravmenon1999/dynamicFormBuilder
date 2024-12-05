import express from 'express';
import { getSamples } from '../controllers/sampleController.js';

const router = express.Router();

// Define routes
router.get('/', getSamples);

export default router;
