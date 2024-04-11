import ApplicationError from "../../error-handler/error.js";
import userModel from "./users.model.js";
import JWT from 'jsonwebtoken';



export default class usersController{
    signUp(req,res){
        const {name, email, password} = req.body;
        const user = userModel.add(name,email,password);
        res.status(201).send(`Registration Successfull ${user}`);
    }

    signIn(req,res){
        const {email, password} = req.body;
        const signedUser  = userModel.logIn(email,password);
        if(!signedUser){
            throw new ApplicationError("User is invalid", 400);
        }
        else{
            const token = JWT.sign({
                userID: signedUser.id,
                email: signedUser.email
        },'AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz',
        {
          expiresIn: '1h',
        });
        return res.status(200).send(`User Logged In - ${token}`);

        }
    }

getAll(req,res){
    const users = userModel.getAll();
    res.status(200).send(JSON.stringify(users));
}

}