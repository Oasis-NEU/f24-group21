import express from 'express';
import cors from 'cors';
import userRoutes from './Routes/userRoutes.js';
import authRoutes from './Routes/authRoutes.js';

const app = express();  // Initialize the Express app


app.use(cors());

//Parse JSON
app.use(express.json());

//Routes
app.use('/users', userRoutes);
app.use('/auth', authRoutes);


export default app;