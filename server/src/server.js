import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import apiRouter from './routes/api.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], // Dev client URLs
  credentials: true
}));
app.use(express.json());

// API route
app.use('/api', apiRouter);

// Root route
app.get('/', (req, res) => {
  res.send('🌌 Portfolio Backend is Running.');
});

// Start DB connection and listen
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server listening at http://localhost:${PORT}`);
  });
});
