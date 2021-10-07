// Array Methods -

var arr = [1, 2, 3, 4, 5]

//1.
arr.unshift(6)
console.log(arr)

//2.
arr.shift()
console.log(arr)


//3. To remove any element from between-
arr.splice(1, 2)
console.log(arr)


//4.
arr.push(7)
console.log(arr)

//5. It does operation on original array and return a new array.
var new_arr = arr.slice(2, 5)
console.log(new_arr)

//6. An array that contains even nums. of original array - Filter method.
var arr1 = [1, 2, 3, 4]
var arr2 = []

// for(var i=0; i<arr1.length; i++){
//     if(arr1[i] % 2 === 0)
//     arr2.push(arr1[i])
// }

var arr2 = arr1.filter((element, index) => {
    //console.log(element, index)
    if(element % 2 === 0)
    return true
})

console.log(arr2)