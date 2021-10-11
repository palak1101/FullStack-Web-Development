const button = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')


const arr = [1, 2, 3, 4, 5]
const val = JSON.stringify(arr)  //converts array/anything to string
localStorage.setItem('val', JSON.stringify(arr))
console.log(val)
console.log(arr)

console.log(localStorage.getItem('val'))
console.log(JSON.parse(localStorage.getItem('val')))