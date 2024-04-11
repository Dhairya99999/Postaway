//importing all libraries
import express from 'express';
import swagger from 'swagger-ui-express'
import apiDocs from './swagger.json' assert {type:'json'};
import cors from 'cors';


//importing all modules,functions,classes
import userRouter from './src/features/users/users.routes.js';
import ApplicationError from './src/error-handler/error.js';
import postRouter from './src/features/posts/posts.routes.js';
import commentRouter from './src/features/comments/comments.routes.js';
import likesRouter from './src/features/likes/likes.routes.js';
import loggerMiddleware from './src/middleware/logger.middleware.js';




//creating server
const server = express();

//using cors for interface access
server.use(cors());


//Json format
server.use(express.json());

//logger middleware
server.use(loggerMiddleware);

//swagger documentation
server.use('/api-docs',swagger.serve,swagger.setup(apiDocs));


//users routes
server.use('/api/users',userRouter)


//posts routes
server.use('/api/posts', postRouter);

//comments routes
server.use('/api/comments', commentRouter);



//likes router
server.use('/api/likes', likesRouter);


//error handler
server.use((err,req,res,next)=>{
    if(err instanceof ApplicationError){
        res.status(err.code).send(err.message);
    }
    else{
        res.status(500).send("Something went wrong please check out documentation at http://localhost:3000/api-docs/");
    }
})

//incase no path matches
server.use((req,res)=>{
    res.status(500).send("Something went wrong please check out documentation at http://localhost:3000/api-docs/");
})

//launching server
server.listen(3000, ()=>{
    console.log('server is running at port 3000')
})