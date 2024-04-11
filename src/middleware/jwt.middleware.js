import JWT from 'jsonwebtoken';
import ApplicationError from '../error-handler/error.js';


export let loggedInUser;

 const jwtAuth = (req,res,next)=>{
const token = req.headers['authorization'];

if(!token){
    throw new ApplicationError("Unauthorized",400);
}

try{
    const payload = JWT.verify(token,'AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz');
    req.email = payload.email;
    loggedInUser = payload.email;
}
catch(err){
    throw new ApplicationError("Unauthorized user",401);
}
next();

}

export default jwtAuth;