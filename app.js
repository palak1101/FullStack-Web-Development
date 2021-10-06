

// by id selector
var heading = document.getElementById('heading')
//console.log(heading)
// console.log(typeof heading)
heading.innerHTML = "Hi from Starlight"  //allows you to modify content of html element.
console.log(heading)



//by classname selector
var paragraph = document.getElementsByClassName('para')
console.log(paragraph)
console.log(paragraph[1])
console.log(paragraph.length)

//paragraph.push("abc")
//console.log(paragraph)



//tagname selector
var tags = document.getElementsByTagName('a')
console.log(tags)



//query selector
var query1 = document.querySelector('#heading')
console.log(query1)

var query2 = document.querySelector('.para')
console.log(query2)