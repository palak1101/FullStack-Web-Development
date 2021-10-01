//First access html elements

const a = document.querySelectorAll('input')[0]
const b = document.querySelectorAll('input')[1]

const add = document.querySelector('#add')
const subtract = document.querySelector('#subtract')
const multiply = document.querySelector('#multiply')
const divide = document.querySelector('#divide')
const resultBox = document.querySelector('.result')

console.log(a, b)
console.log(add)
console.log(subtract)
console.log(multiply)
console.log(divide)
console.log(resultBox)

//Now numbers will enter number after that next event would be clicking on button 
//Second Step add event listener to buttons

// const addFunction = () =>{
//     const result = parseInt(a.value) + parseInt(b.value)
//     console.log(result)
// }

// add.addEventListener('click', addFunction)


//Now we've result, display it.
//Individual callback function for each operation.

const sum = () =>{
    const result = parseInt(a.value) + parseInt(b.value)
    resultBox.innerHTML = result
}

add.addEventListener('click', sum)



const subtraction = () =>{
    const result = parseInt(a.value) - parseInt(b.value)
    resultBox.innerHTML = result
}

subtract.addEventListener('click', subtraction)



const multiplication = () =>{
    const result = parseInt(a.value) * parseInt(b.value)
    resultBox.innerHTML = result
}

multiply.addEventListener('click', multiplication)


const division = () =>{
    const result = parseInt(a.value) / parseInt(b.value)
    resultBox.innerHTML = result
}

divide.addEventListener('click', division)


