import express from 'express'
import usersController from '../controllers/usersController.js';

const router = express();

router.get('/', usersController.getAllUsers);


export default router;