import express from 'express';
import cors from 'cors';
import userRoutes from './Routes/userRoutes.js';

const app = express();  // Initialize the Express app

// Configure CORS options
const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"], // Allow requests from these origins
};

// Use CORS middleware
app.use(cors(corsOptions));

//Use routes
app.use('/users', userRoutes);


export default app;