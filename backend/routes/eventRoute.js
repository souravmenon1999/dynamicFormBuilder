import express from 'express';
import { addEvent } from '../controllers/eventController.js';

const router = express.Router();

// Define routes
router.post('/', addEvent);

export default router;
