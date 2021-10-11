// I. Module - path

const path = require('path')
//console.log(path)

//1.
console.log(path.resolve('./utils.js'))   //converts relative to absolute path from root of utils.js file
console.log(path.relative('/', "./utils.js"))  // absolute path using relative

console.log(path.relative('./GIT CONTRIBUTE', "./GIT CONTRIBUTE/FullStack-Track/utils.js"))  //converts absolute path to relative

//2.
console.log(path.extname('./app.js'))  //shows extension name

//3.
console.log(path.dirname('./FullStack-Track/utils.js'))  // will give ypu parent directory

//4.
console.log(__dirname) //gives current directory in which your file you're using right now.
console.log(path.join(__dirname, 'app.js'))  //joins file with current directory.