//   // object creation and object literals
// var userOne= {
//     email: 'slevinshrestha@gmail.com',
//     name: 'Sam',
//     login(){
//         console.log(this.email+ 'has logged in')
//     },
//     logout(){
//         console.log(this.email+ 'has logged out')
//     }
// }
// userOne.name = "Sampresh Stha";
// // can update the properties both ways
// userOne['email'] = "samsam@SpeechGrammarList.com";

// // create new properties and methods in object
// userOne.age = 25;
// userOne['onlineStatus'] = 'active';
// // also can create a method like this
// userOne.status = function(){
//     console.log(userOne.email+ 'is'+ userOne.onlineStatus);
// } 
//   // --------------------------------------------------------


// constructor
// class User{
//     constructor(name, email){
//         this.name = name; 
//         this.email = email;
//         this.score = 0;
//     }
//     login(){
//         console.log(this.email+ 'has logged in');
//         return this;
//     }
//     logout(){
//         console.log(this.email+ 'has logged out')
//         return this
//     }
//     updateScore(){
//         this.score++;
//         console.log('Score for '+this.email+ ' is now '+this.score);
//         //  returning the instance of the object
//         return this; 
//     }
// }
// // Inheritance -- extends
// class Admin extends User{
//     deleteUser(user){
//         users = users.filter(u => {
//             return u.email != user.email
//         })
//     }
// }

// var userA = new User('s1','s1@gmail.com');
// var userB = new User('s2','s2@gmail.com');
// // admin object has access to deleteUser method
// var admin =new Admin('s3','s3@gmail.com');

// // creating array of objects
// var users  = [userA, userB, admin];

// // console.log('Total users');
// // console.log(users);

// // filtering data to give admin roles
// admin.deleteUser(userB);
// console.log(users);

// // method chaining needs the return this to occur
// userA.login().updateScore().updateScore().logout();

// //----------------------------------------------------------------------

// Making class and constructors without using class keyoword.....using prototype fucntion

function User(email, name){
    this.email = email;
    this.name = name;
    this.online= false;
}
User.prototype.login = function(){
    this.online =true;
    console.log(this.email+" has logged in");
}
User.prototype.logout=function(){
    this.online =false;
    console.log(this.email+" has logged out");
}
// ...args is spread operator....place each parameter into an array
function Admin(...args){
    // console.log(args);

    // getting the reference of this from User class and connecting to args
    User.apply(this,args);
    this.role='super_admin';
}

// inherit methods: like login() from user methods
Admin.prototype = Object.create(User.prototype)

// adding new method to Admin
Admin.prototype.deleteUser = function(user){
    users = users.filter(u=>{
        return u.email != user.email
    })
}

var userOne = new User('AA',"aa@gmail.com");
var userTwo = new User('BB',"bb@gmail.com");
var admin = new Admin('Sam','sam@admin.com')
// userOne.login();
var users = [userOne,userTwo,admin];
//console.log(admin);
// admin.deleteUser(userOne);
// console.log(users);


