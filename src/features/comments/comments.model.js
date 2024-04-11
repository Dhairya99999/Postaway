import ApplicationError from "../../error-handler/error.js";
import { loggedInUser } from "../../middleware/jwt.middleware.js";
import postsModel from "../posts/posts.model.js";

export default class commentsModel{
    constructor(id, userId, postId, content){
        this.id = id,
        this.userId = loggedInUser,
        this.postId = postId,
        this.content = content
    }


    static getAllComments(){
        return comments;
    }

    static getCommentByPostId(postId){
        const comment = comments.filter((c)=> c.postId == postId);
        if(!comment){
            throw new ApplicationError("Comments for the post does not exists",404);
        }
        return comment;
    }

    static add(postId,content){
   
    
        const comment = new commentsModel(comments.length +1, loggedInUser, postId, content);
        comments.push(comment);
    }




    static delete(id){
        const commentIndex = comments.findIndex((c)=>{
            return c.id == id;
        });
        comments.splice(commentIndex,1);
    }




    static update(id,content){
        const commentIndex = comments.findIndex((c)=> c.id == id && c.userId == loggedInUser);


        if(commentIndex < 0 ){
            throw new ApplicationError("Comment does not exists",404);
        }
else{
        comments[commentIndex].content = content;
    
    }}


}




var comments =[    {
    id: 1,
    userId: "dhairya@gmail.com",
    postId:1,
    content: "Very Nice Pic 1",
    
},
{
    id: 2,
    userId: "Ram@gmail.com",
    postId:1,
    content: "Very Nice Pic 2 ",
    
},
{
    id: 3,
    userId: "dhairya@gmail.com",
    postId:2,
    content: "Very Nice Pic 3 ",
    
},
{
    id: 4,
    userId: "Ram@gmail.com",
    postId:2,
    content: "Very Nice Pic 4",
    
},
];
