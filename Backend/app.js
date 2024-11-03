import express from 'express';
import cors from 'cors';
import userRoutes from './Routes/userRoutes.js';
import authRoutes from './Routes/authRoutes.js';

const app = express();  // Initialize the Express app

// Configure CORS options
const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"], // Allow requests from these origins
};
app.use(cors(corsOptions));

//Parse JSON
app.use(express.json());

//Routes
app.use('/users', userRoutes);
app.use('/auth', authRoutes);

export default app;