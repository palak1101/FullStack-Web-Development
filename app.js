var button = document.querySelector('button')
var input = document.querySelector('input')
var list = document.querySelector('ul')

//check - console.log(button, input, list)
// var callbackfunction = () => {
//     console.log("clicked")
// }

// button.addEventListener('click', () => {
//     console.log("clicked")
// })

// button.addEventListener('click', (event) => {
//     console.log(event)
//     console.log(event.target)
//     console.log(input.value)
// })


var callbackfunction = (event) => {
    const inputValue = input.value
    const element = document.createElement('li')
    const textNode = document.createTextNode(inputValue)
    element.appendChild(textNode)
    list.appendChild(element)
}

button.addEventListener('click', callbackfunction)

