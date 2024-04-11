import express from 'express'
import likesController from './likes.controller.js';
import jwtAuth from '../../middleware/jwt.middleware.js';

const likeController = new likesController();

const likesRouter = express.Router();

likesRouter.get('/:id',likeController.get);
likesRouter.get('/toggle/:postId',jwtAuth, likeController.toggle);
export default likesRouter;