import express from 'express';
import { signInWithEmail, signInWithPassword, signOut } from '../Controllers/authController.js';

const router = express.Router();

router.post('/login-email', signInWithEmail);
router.post('/login-password', signInWithPassword);
router.post('/logout', signOut);

export default router; 


