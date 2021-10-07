const input1 = document.querySelectorAll('input')[0]
const input2 = document.querySelectorAll('input')[1]

const add = document.querySelector('#add')
const subtract = document.querySelector('#subtract')
const multiply = document.querySelector('#multiply')
const divide = document.querySelector('#divide')
const resultbox = document.querySelector('.result')


//console.log(input1, input2, add, subtract, multiply, divide)

// var sum = () => {
//     const result = ( parseInt(input1.value) + parseInt(input2.value))
//     resultbox.innerHTML = result
// }

// add.addEventListener('click', () => {
//     const result = ( parseInt(input1.value) + parseInt(input2.value))
//     resultbox.innerHTML = result
// })


// subtract.addEventListener('click', () => {
//     const result = ( parseInt(input1.value) - parseInt(input2.value))
//     resultbox.innerHTML = result
// })


// multiply.addEventListener('click', () => {
//     const result = ( parseInt(input1.value) * parseInt(input2.value))
//     resultbox.innerHTML = result
// })


// divide.addEventListener('click', () => {
//     const result = ( parseInt(input1.value) / parseInt(input2.value))
//     resultbox.innerHTML = result
// })



// Switch case for calculator operation

const calculate = (event, operation) => {
    switch (operation) {
        case "add":
            resultbox.innerHTML = parseInt(input1.value) + parseInt(input2.value)
            break
        
            case "subtract":
                resultbox.innerHTML = parseInt(input1.value) - parseInt(input2.value)
                break
            

            case "multiply":
                resultbox.innerHTML = parseInt(input1.value) * parseInt(input2.value)
                break


            case "divide":
                resultbox.innerHTML = parseInt(input1.value) / parseInt(input2.value)
                break

        
    }
}




add.addEventListener('click', (event) => {
    calculate(event, 'add')
})

subtract.addEventListener('click', (event) => {
    calculate(event, 'subtract')
})

multiply.addEventListener('click', (event) => {
    calculate(event, 'multiply')
})

divide.addEventListener('click', (event) => {
    calculate(event, 'divide')
})








