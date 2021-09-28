//Non-Primitive Datatype - Array
var arr = [1,2,3,4]
console.log(arr)
console.log(typeof arr)
console.log(arr.length)

arr.push(5)
console.log(arr)
console.log(arr.length)

// To define a variable as constant
// const age = 20
// age = 22
// console.log(age)

//Operators
//Arithmetic
var a = 4
var b = 8

console.log('a+b=', a+b)
console.log('a-b=', a-b)
console.log('a*b=', a*b)
console.log('a/b=', a/b)
console.log('a**b=', a**b)
console.log('b%a=', b%a)

//Assignment
console.log('b ', b)
b += 10
console.log('b+=10 =', b)

b--
console.log('b-- =', b)

// var c = 10
// console.log(++c) o/p - 11
// console.log(c++)       - 10
// console.log(c)         - 11

//Comparison
var d = 10
var e = 2
var f = '10'
console.log(d>e)
console.log(d<=e)
console.log(d==e)

//console.log(d == f) o/p - true  how? f is character while d is number
console.log(d === f)

//Logical
//1.AND
console.log('true && true: ', true && true)
console.log('false && true: ', false && true)
console.log('true && false: ', true && false)
console.log('false && false: ', false && false)

//2.OR
console.log('true || true: ', true || true)
console.log('false || true: ', false || true)
console.log('true || false: ', true || false)
console.log('false || false: ', false || false)



