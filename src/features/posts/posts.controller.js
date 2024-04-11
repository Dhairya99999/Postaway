import ApplicationError from "../../error-handler/error.js";
import postsModel from "./posts.model.js";
import { loggedInUser } from "../../middleware/jwt.middleware.js";
export default class postsController{

    getAllPosts(req,res){
const posts = postsModel.getAllPosts();
res.status(200).send(posts);
    }

    createNewPost(req,res){
        const caption = req.body.caption;
        
        const imageUrl = req.file.filename;
        
        
        
        const newPost = postsModel.createPost(caption, imageUrl);
        res.status(201).send('Post Created');
        
    
    }

    getPostById(req,res){
        const id = req.params.id;
        const post = postsModel.getPostById(id);

        if(!post){
            throw new ApplicationError("Post not found",404)
        }
        res.status(200).send(post);
    }

    getAllPostsByUser(req,res){
        
        const post = postsModel.getPostsByUser(loggedInUser);
        if(!post){
            throw new ApplicationError("Post not found",404)
        }
        res.status(200).send(post);
        
    }

    delete(req,res){
        const id = req.params.id;
        const post = postsModel.delete(id);
        res.status(200).send(`Post with id - ${id} is deleted`);
    }

    update(req,res){
        const id = req.params.id;
        const caption = req.body.caption;
        const imageUrl = req.file.filename;
        const post = postsModel.update(id, caption, imageUrl);
        res.status(200).send(`Post with id - ${id} has been updated`);
    }

    filter(req,res){
        const searchQuery = req.query.search;
        const result = postsModel.filterPost(searchQuery);
    
    
        if(!result){
            throw new ApplicationError("No such posts exists",404);
        }
        res.status(200).send(result);
     }

     sort(req,res){
        const result = postsModel.getSortedPosts();
        if(!result){
            throw ApplicationError("There are no posts",404);
        }
        res.status(200).send(result);
     }

     bookmark(req,res){
        const id = req.params.id;
        const bookmarkedPost = postsModel.bookmark(id);
        res.status(201).send(bookmarkedPost);
    }

    getBookmarks(req,res){
        const bookmarks= postsModel.getBookmarks();
        if(bookmarks.length == 0){
            throw new ApplicationError("No bookmarked posts",404);
        }
        res.status(200).send(bookmarks);
    }

}