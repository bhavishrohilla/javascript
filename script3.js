var list = ["cat", "dog", "bird", "bear"]
console.log(list[0]);

var numbers = [1, 2, 3, 4]
var booleans = [true, false, true]
var functionList = [function apple(){    
    console.log("apple");
},function mango() {
    console.log("mango");
}]
//Basically array can store different types  of data
var mixedList = [1,2,true,function banana() {
    alert("Hello");
}]

//Array
var list = ["cat", "dog", "bird", "bear"]
list.shift() //it removes the first element
list.pop() //it shifts the last element
list.push("elephant") //it adds the elephant in the last
list.cancat(["bee", "deer"])
//arrays allow indexing