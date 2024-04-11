import commentsModel from "./comments.model.js";
import ApplicationError from "../../error-handler/error.js";
import postsModel from "../posts/posts.model.js";

export default class commentsController{
    getAllComments(req,res){
        const comments = commentsModel.getAllComments();
        res.status(200).send(comments);
    }

    addComment(req,res){
        const postId = req.params.id;
        const content = req.body.content;

        const validPost = postsModel.getAllPosts().find((p)=>
       { return p.id == postId
    })

        if(!validPost){
            throw new ApplicationError("Post does not exists",404)
        }

        const newComment = commentsModel.add(postId,content);
        res.status(201).send(`comment has been added to post with post Id - ${postId}`);
    }

    getCommentsById(req,res){
        const id =  req.params.id;
        const comment = commentsModel.getCommentByPostId(id);
        res.status(200).send(comment);
    }


    delete(req,res){
        const id = req.params.id;
        const validComment = commentsModel.getAllComments().find((c)=>{
            return c.id == id
        });

        if(!validComment){
            throw new ApplicationError("Comment does not exists",404);
        }

        commentsModel.delete(id);
        res.status(200).send(`Comment with id - ${id} has been deleted`);
    }


    update(req,res){
        const id = req.params.id;
        const content = req.body.content;
        
        const comment = commentsModel.update(id, content);
        res.status(200).send(`comment with id - ${id} has been updated`);
    }
}