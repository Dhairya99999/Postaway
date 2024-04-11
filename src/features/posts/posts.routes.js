import express from 'express';
import postsController from './posts.controller.js';
import jwtAuth from '../../middleware/jwt.middleware.js';
import {upload} from '../../middleware/file-upload.middleware.js';
import bodyParser from 'body-parser';
const postController = new postsController();

const postRouter = express.Router();
postRouter.use(bodyParser.json());
postRouter.get('/all',postController.getAllPosts);
postRouter.post('/',jwtAuth,upload.single('imageUrl'), postController.createNewPost);
postRouter.get('/:id',postController.getPostById);
postRouter.get('/', postController.getAllPostsByUser);
postRouter.delete('/:id',postController.delete);
postRouter.put('/:id',jwtAuth,upload.single('imageUrl') ,postController.update);
postRouter.post('/filter',postController.filter);
postRouter.get('/custom/sort',postController.sort);

postRouter.post('/bookmarks/:id',postController.bookmark);
postRouter.get('/bookmarks/all',postController.getBookmarks);


export default postRouter;