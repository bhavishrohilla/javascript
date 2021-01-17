todos = [
    "brush teeth",
    "clean room",
    "exercise",
    "eat healthy",
    "study JAVASCRIPT",
];

for (var i=0; i<todos.length; i++) {
     todos[i] = todos[i] + "??"
     console.log(todos)
}

for (var i=0; i<todos.length; i++) {
    console.log(todos[i] + "--" + i);
}
var counterOne = 0;
while(counterOne<todos.length) {
    console.log(counterOne +"--" +  todos[counterOne]);
    counterOne++;
}

var counterTwo = todos.length;
do{
    console.log(counterTwo +"--" + todos[i] );
    i--;
    counterTwo--;
} while(i >= 0);

var counterTwo = 0;
var i = 0;
do{
    console.log(counterTwo + "--"+ todos[i]);
    counterTwo++;
} while(counterTwo > todos.length)

