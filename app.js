// document. -object

// var heading = document.getElementById('heading')
// console.log(heading)     you're tring to access element that hasn't been declared before script tag, hence it couldn't recognize it.

// var heading = document.getElementById('heading')
// console.log(heading)
// heading.innerHTML = "Hi from JS"
// console.log(typeof heading) 

var heading = document.getElementById('heading')
var para = document.getElementsByClassName('para')
var tags = document.getElementsByTagName('a')
var query = document.querySelector('#heading')

console.log(heading)
console.log(para)
console.log(para.length)
console.log(para[0])
console.log(para[1])
console.log(tags)
console.log(query)

//para.push('star')

