import likesModel from "./likes.model.js";
import ApplicationError from "../../error-handler/error.js";


export default class likesController{
    get(req,res){
        const postId = req.params.id;
       const likes = likesModel.getLikesByPostId(postId);

       if(likes.length == 0){
        throw new ApplicationError("There are no likes for this post",404);
       }
       
        res.status(200).send(likes);
    }


    toggle(req,res){
        const postId = req.params.postId;
        const likes = likesModel.toggleLikes(postId);
        res.send(likes);

    }
}