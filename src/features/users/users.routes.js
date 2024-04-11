import express from 'express';
import usersController from './users.controller.js';
import jwtAuth from '../../middleware/jwt.middleware.js';



const userController = new usersController();
const userRouter = express.Router();

userRouter.post('/signUp',userController.signUp);
userRouter.post('/signIn', userController.signIn);
export default userRouter;