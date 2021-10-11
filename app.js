// II. Module- File System

const fs = require('fs')
const { text } = require('stream/consumers')

//console.log(fs)

//1.
fs.readFile('./text.txt', (error, data) => {
    if(error) console.log(error)
    else console.log(data.toString())        // 'utf8' in parameter
})

console.log("I'm random log")

//console.log(fs.readFileSync('./text.txt', 'utf8'))


//2.
fs.writeFile('./text.txt', "Happy", (error, data) => {
    if(error) console.log(error)
    else console.log(data)        
})

//3. To append in a file-
fs.writeFile('./text.txt', `Append me ${fs.readFileSync('./text.txt', 'utf8')}`, (error) => {
    if (error) console.log(error)
})