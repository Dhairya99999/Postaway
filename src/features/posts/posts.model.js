import ApplicationError from "../../error-handler/error.js";
import { loggedInUser } from "../../middleware/jwt.middleware.js";

export default class postsModel{
    constructor(id,userId, caption, imageUrl){
        this.id = id,
        this.userId = loggedInUser,
        this.caption = caption,
        this.imageUrl = imageUrl
    }

    static getAllPosts(){
            return posts;
    }

    static createPost(caption,imageUrl){

        const newPost = new postsModel(posts.length + 1, loggedInUser, caption, imageUrl);
        posts.push(newPost);
        return newPost;
    }

    static getPostById(id){
        const post = posts.find((p)=>
         p.id == id
        );
        return post;

    }

    static getPostsByUser(loggedInUser){
        const post = posts.filter((p)=>
        p.userId == loggedInUser
    );
    return post 
    }


    static delete(id){
        const postIndex = posts.findIndex((p)=>
    p.id == id);

        if(postIndex < 0){
            throw new ApplicationError("Post does not exists",404);
        }

   posts.splice(postIndex,1); 
    }

    static update(id,caption,imageUrl){
        const postIndex = posts.findIndex((p)=> p.id == id && p.userId == loggedInUser);


        if(postIndex < 0 ){
            throw new ApplicationError("Post does not exists",404);
        }
else{
        posts[postIndex].caption = caption;
        posts[postIndex].imageUrl= imageUrl;
    }}



    static filterPost(searchContent) {
        let modifiedQuery = searchContent.trim().toLowerCase();
        const result = posts.filter((p) =>
          p.caption.trim().toLowerCase().includes(modifiedQuery)
        );
       return result;

      }

      static getSortedPosts(){
    
    
        let sortedArray = posts.slice(); //creating a shallow copy of all the posts
    
        sortedArray = sortedArray.sort((a,b) => a.id - b.id);
    
        return sortedArray;
      } 


      static bookmark(id){
        const post = posts.find((p)=>
    p.id == id);
        if(!post){
            throw new ApplicationError("No such post exists",404);
        }
        bookmarks.push(post);
        return `Post with id ${id} has been bookmarked`;
      }

      static getBookmarks(){
        return bookmarks;
      }

}
var bookmarks=[];
var posts = [
    {
        id:1,
        userId: "abc@gmail.com",
        caption: "This is the sample caption for first post",
        imageUrl: "https://m.media-amazon.com/images/I/81iiPvmfJvL._SY741_.jpg",
    }, {
        id: 2,
        userId: "dhairya@gmail.com",
        caption: "This is the sample caption for second post",
        imageUrl: "https://m.media-amazon.com/images/I/81iiPvmfJvL._SY741_.jpg",

    }, {
        id: 3,
        userId: "abc@gmail.com",
        caption: "This is the sample caption for third post",
        imageUrl: "https://m.media-amazon.com/images/I/81iiPvmfJvL._SY741_.jpg",
    }, {
        id: 4,
        userId: "dhairya@gmail.com",
        caption: "This is the sample caption for fourth post",
        imageUrl: "https://m.media-amazon.com/images/I/81iiPvmfJvL._SY741_.jpg",
    }
]