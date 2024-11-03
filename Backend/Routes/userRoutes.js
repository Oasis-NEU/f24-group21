import express from 'express';
import {getUsers, addUser} from '../Controllers/userController.js';

const router = express.Router();


//Fetch backend
router.get('/', getUsers);

//Add to backend
router.post('/', addUser);


export default router;