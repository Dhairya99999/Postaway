import express from 'express'
import commentsController from './comments.controller.js';
import jwtAuth from '../../middleware/jwt.middleware.js';



const commentController = new commentsController();

const commentRouter = express.Router();

commentRouter.get('/',commentController.getAllComments);
commentRouter.post('/:id',jwtAuth, commentController.addComment);
commentRouter.get('/:id',commentController.getCommentsById);
commentRouter.delete('/:id',commentController.delete);
commentRouter.put('/:id',jwtAuth,commentController.update);

export default commentRouter;