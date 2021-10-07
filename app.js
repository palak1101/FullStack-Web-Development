var body = document.querySelector('body')
var heading = document.querySelector('#heading')
var button = document.querySelector('button')

console.log(heading, button)

var callbackfunction = () => {
    body.classList.toggle('dark')
}

button.addEventListener('click', callbackfunction)