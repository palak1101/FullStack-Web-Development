
//a.
console.log("Something")


//b.
for(var i=0; i<10; i++){
    console.log("iteration" , i+1)
}

// Node.js can't run this as it is provided by browser.
//console.log(document)
//console.log(window)

// Node.js runs this as it is provided by V8 engine.
// setTimeout(() => {
//     console.log("Hi!")
// }, 3000)


// 1. if we wnt to add a function or a property to exports of module?
const greet = () => "hi"
module.exports.greet = greet

module.exports.something = "hi!"

//console.log(module)
console.log("I'm index.js")