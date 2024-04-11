export default class userModel{
    constructor(id,name,email,password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static add(name,email,password){
        const user = new userModel(users.length+1, name, email, password);
        users.push(user);
        console.log(user);
    }

    static logIn(email,password){
        const verifiedUser = users.find((u)=>
             u.email == email && u.password == password
        );
        return verifiedUser;
    }

    static getAll(){
        return users;
    }

}

var users = [{
    id: 1,
    name: 'Dhairya',
    email: 'dhairya@gmail.com',
    password: 'Dhairya'
  },
  {
    id: 2,
    name: 'Ram',
    email: 'Ram@gmail.com',
    password: 'Ram'
  }];
