//1.
function greeting(){
    console.log("Hello!")
}

greeting()


//2.
function greet(Name, age){
    console.log(Name, age)
}

greet('Palak', 20)

//3. Default values
function greet1(Name="Star", age=76){
    console.log("Hey! " + Name + " Your age is " + age)
}

greet1('Snow')


//4. output->NaN
function sum(a, b){
    console.log(a + b)
}

sum(1)


//5. Function/Keyword declaration-
function add(a, b){
    var sum1 = a + b
    return sum1
}

//console.log(add(11, 21))

var result = add(11, 21)
console.log(result)


//6. Function Expression-
var multiply = function (a, b){
    var multiplication = a*b
    return multiplication
}

console.log(multiply(11, 2))


//7. eg-
var greeting2 = function (Name, age){
    console.log("Your name is " + Name + " and you are " + age + " years old.")
}

greeting2("Neha", 43)


//8. Difference between keyword/function declaration and function expression-
console.log(subtract(10, 8))

// --> function declr.
function subtract(a, b){
    var subtraction = a - b
    return subtraction
}

// --> function express.
// var subtract = function (a, b){
//     var subtraction = a - b
//     return subtraction
// }


//9. Arrow function-

// var divide = (a, b) => {
//     var division = a/b
//     return division
// }

// var divide = (a=0, b=0) => {
//     return a/b
// }

var divide = (a=0, b=0) => a/b

console.log(divide(20, 8))


//10. Callback function-
var arr = ["go to park", "Eat food", "Do assignments"]

// for(var i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// var callbackfunction = (element, mystery) => {
//     console.log(element, mystery)
// }

//arr.forEach(callbackfunction)

arr.forEach((element) => {
    console.log(element)
})


