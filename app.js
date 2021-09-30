//1.
function greet(Name, age){
    console.log(Name, age)
    console.log('Hello')
}

greet('Palak', 20)

//2.
// function greet(Name, age){
//     console.log(age)
//     console.log('Hello')
// }

// greet('Palak') -value not assigned while calling hence undefined

//3. Default value
function greet(Name, age = 19){
    console.log(Name, age)
    console.log('Hello')
}

greet('Palak')   

//4.
// function sum(a,b){
//     console.log(a+b)  -output = NaN (not a number)
// }

// sum(3)

//5.
function add(a = 0, b = 0){
    var sum = a + b
    return sum
}

var result = add(10, 20)
console.log(result)

//console.log(add(10, 20))

//6.
// function add(a = 0, b = 0){
//     var sum = a + b
//     return sum
// }
// console.log(sum)  -reference error since it(sum) is out of scope not global its local to function.

// var result = add(10, 20)
// console.log(result)

//Function Expression

function add(a = 0, b = 0){
    var sum = a + b
    return sum
}

var add = function (a = 0, b = 0){
    var sum = a + b
    return sum
}


console.log(add(10,20))

//Arrow Function

var add = (a = 0, b = 0) => {     //-It saves time , no need to write function keyword everytime.
    var sum = a + b
    return sum
}


console.log(add(10,20))


