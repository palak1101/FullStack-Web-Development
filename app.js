//Shorthands of arrow function-

//1.
//  var add = (a = 0, b = 0) => {
//     return a+b
// }

// 2. 
// var add = (a = 0, b = 0) => a + b

// console.log(add(10,20))


//3.
// const greet = name => 'Hi!' + name

// console.log(greet('Palak'))




//CallBack Functions
var arr = ['My', 'Name', 'is', 'StarLight']

//To iterate - for loop
// for (var i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// var callbackFunction = (element, index) => {
//     console.log(element, index)
// }
//arr.forEach(callbackFunction)


arr.forEach((element, index) => {  -shorthand of above two steps
    console.log(element, index)
})