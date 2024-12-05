import express from 'express';
import { addForm } from '../controllers/formController.js';

const router = express.Router();

// Define routes
router.post('/', addForm);

export default router;
