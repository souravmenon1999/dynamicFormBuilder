import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import formRoutes from './routes/formRoute.js';
import eventRoutes from './routes/eventRoute.js';

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Define routes

app.use('/form',formRoutes)
app.use('/event',eventRoutes)
app.get('/', (req, res) => {
  res.send('API is running...');
});

export default app;
