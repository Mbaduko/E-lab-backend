import { Router } from 'express';
import { createUser } from '../controllers/user.controller.js';
import userTypeValidator from '../../middleware/userTypeValidator.middleWare.js';


const userRoutes = Router();

userRoutes.route('/:type').post(userTypeValidator, createUser);

export default userRoutes;