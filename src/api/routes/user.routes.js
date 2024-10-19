import { Router } from 'express';
import { createUser } from '../controllers/user.controller.js';


const userRoutes = Router();

userRoutes.route('/').post(createUser);

export default userRoutes;