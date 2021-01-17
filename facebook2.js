var database =[
    {
        username: "bhavish",
        password: "secret",
    },
    {
        username: "andrie",
        password: "555",
    },
    {
        username: "ross",
        password: "666",
    }

];

var newsfeed = [
    {
        username: "Avish",
        timeline: "If you are good at something never do it for FREE!!",
    },
    {
        username: "bhavish",
        timeline: "If you want to go to heaven,first you have to DIE!"
    },
];

var usernamePrompt = prompt("What is your username");
var passwordPrompt = prompt("What is your password");

function isUserValid(user, pass) {
    for(var i=0;i<database.length;i++){
        if(database[i].username===user && database[i].password===pass){
            return true;
        }
    }
    return false;
}
// database.forEach(function(database ,i)) {
//     console.log(database , i);
// };

function signIn(user,pass) {
    if (isUserValid(user,pass)){
        console.log(newsfeed);
    } else{
        alert("OOPS!! Wrong Credentials");
    }
}
signIn(usernamePrompt,passwordPrompt);