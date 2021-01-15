var database =[
    {
        username: "bhavishrohilla",
        password: "secret",
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

function signIn(user,pass) {
    if (user === database[0].username && pass === database[0].password){
        console.log(newsfeed);
    } else{
        alert("OOPS!! Wrong Credentials");
    }
}
signIn(usernamePrompt,passwordPrompt);