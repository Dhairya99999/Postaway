import ApplicationError from "../../error-handler/error.js";
import { loggedInUser } from "../../middleware/jwt.middleware.js";
import postsModel from "../posts/posts.model.js";


export default class likesModel{
    constructor(id, userId, postId){
        this.id = id;
        this.userId = userId;
        this.postId = postId
    }

    static getLikesByPostId(postId){
        const validPost = postsModel.getAllPosts().find((p)=>{
            return p.id == postId;
        });

        if(!validPost){
            throw new ApplicationError("Post does not exists",404);
        }

        const likesForPost = likes.filter((l)=>{
            return l.postId == postId;
        });

        return likesForPost;

    }





    static toggleLikes( postId){
        const validPost = postsModel.getAllPosts().find((p)=>{
            return p.id == postId;
        });

        if(!validPost){
            throw new ApplicationError("Post does not exists",404);
        }

        const likesForPostByUser = likes.find((l)=>{
            return ((l.postId == postId) && (l.userId == loggedInUser));
        });

       
        if(!likesForPostByUser){
           const newLike = new likesModel(likes.length +1, loggedInUser, postId);
            likes.push(newLike);
            return "Post has been liked";
        }



        else{
            const likeIndex = likes.findIndex((l)=>{
                return l.postId == postId && l.userId == loggedInUser;
            });


            likes.splice(likeIndex,1);
            return "The post has been unliked";
        }



    }

}

const likes = [
    {
        id: 1,
        userId: "Dhairya@gmail.com",
        postId: 1

    },
    {
        id: 2,
        userId: "Ram@gmail.com",
        postId: 1

    },
    {
        id: 3,
        userId: "Dhairya@gmail.com",
        postId: 2

    },
    {
        id: 4,
        userId: "Ram@gmail.com",
        postId: 2

    },
];